import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Quiz Complete</Text>
          <Text style={styles.title}>{quiz.title} Results</Text>
          <Text style={styles.score}>
            {score} / {totalPoints}
          </Text>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.bodyText}>
            {percentage >= 80
              ? 'Excellent work. You really know this topic.'
              : percentage >= 50
                ? 'Good effort. A replay can help lock in the tricky ones.'
                : 'Keep practicing. You can replay right away and improve.'}
          </Text>

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
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    maxWidth: 620,
    padding: spacing.xl,
    width: '100%',
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 34,
    fontWeight: '800',
  },
  score: {
    color: colors.primaryDark,
    fontSize: 52,
    fontWeight: '900',
    marginTop: spacing.lg,
  },
  percentage: {
    color: colors.muted,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: spacing.md,
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
  },
});
