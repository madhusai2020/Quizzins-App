import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {getQuizById} from '../../data/quizData';
import {colors, radii, spacing} from '../../theme';

export default function QuizResult({navigation, route}) {
  const {quizId, score = 0} = route.params ?? {};
  const quiz = getQuizById(quizId);

  if (!quiz) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Result not found</Text>
      </View>
    );
  }

  const totalPoints = quiz.questions.length * 5;
  const percentage = Math.round((score / totalPoints) * 100);

  return (
    <View style={[styles.container, {backgroundColor: quiz.backgroundColor}]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, {borderColor: quiz.accentColor}]}>
          <View style={[styles.scorePanel, {backgroundColor: quiz.accentColor}]}>
            <View style={styles.scoreCopy}>
              <Text style={styles.eyebrow}>Final Score</Text>
              <Text style={styles.title}>{quiz.title} Results</Text>
              <Text style={styles.score}>
                {score} / {totalPoints}
              </Text>
              <Text style={styles.percentage}>{percentage}%</Text>
            </View>
            <Image
              accessibilityIgnoresInvertColors
              resizeMode="cover"
              source={{uri: quiz.imageUrl}}
              style={styles.resultImage}
            />
          </View>

          <View style={styles.messageArea}>
            <Text style={styles.bodyText}>
              {percentage >= 80
                ? 'Excellent work. You really know this topic.'
                : percentage >= 50
                  ? 'Good effort. A replay can help lock in the tricky ones.'
                  : 'Keep practicing. You can replay right away and improve.'}
            </Text>
          </View>

          <View style={styles.actions}>
            <PrimaryButton
              accessibilityLabel={`Replay ${quiz.title} quiz`}
              onPress={() =>
                navigation.navigate('QuizQuestion', {
                  quizId,
                  questionIndex: 0,
                  score: 0,
                })
              }
            >
              Play Again
            </PrimaryButton>
            <PrimaryButton
              accessibilityLabel="Return to quiz catalog"
              onPress={() => navigation.navigate('Catalog')}
              variant="secondary"
            >
              Catalog
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.panel,
    borderRadius: radii.lg,
    borderWidth: 2,
    maxWidth: 780,
    overflow: 'hidden',
    width: '100%',
  },
  scorePanel: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    padding: spacing.xl,
  },
  scoreCopy: {
    flex: 1,
    minWidth: 260,
  },
  resultImage: {
    borderColor: '#FFFFFF',
    borderRadius: radii.md,
    borderWidth: 3,
    flex: 1,
    height: 220,
    minWidth: 260,
  },
  eyebrow: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
  },
  score: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '900',
    marginTop: spacing.lg,
  },
  percentage: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  messageArea: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  bodyText: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 26,
    marginBottom: spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    padding: spacing.xl,
    paddingTop: 0,
  },
});
