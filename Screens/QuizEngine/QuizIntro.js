import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {getQuizById} from '../../data/quizData';
import {colors, radii, spacing} from '../../theme';

export default function QuizIntro({navigation, route}) {
  const quiz = getQuizById(route.params?.quizId);

  if (!quiz) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Quiz not found</Text>
        <PrimaryButton onPress={() => navigation.navigate('Catalog')}>
          Back to Catalog
        </PrimaryButton>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: quiz.backgroundColor}]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, {borderColor: quiz.accentColor}]}>
          <View style={[styles.heroBand, {backgroundColor: quiz.accentColor}]}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>Quiz Details</Text>
              <Text style={styles.title}>{quiz.title} Quiz</Text>
              <Text style={styles.description}>{quiz.description}</Text>
            </View>
            <Image
              accessibilityIgnoresInvertColors
              resizeMode="cover"
              source={{uri: quiz.imageUrl}}
              style={styles.heroImage}
            />
          </View>

          <View style={styles.metaRow}>
            <View style={[styles.metaItem, {borderColor: quiz.accentColor}]}>
              <Text style={styles.metaValue}>{quiz.questions.length}</Text>
              <Text style={styles.metaLabel}>Questions</Text>
            </View>
            <View style={[styles.metaItem, {borderColor: quiz.accentColor}]}>
              <Text style={styles.metaValue}>{quiz.questions.length * 5}</Text>
              <Text style={styles.metaLabel}>Points</Text>
            </View>
          </View>

          <View style={styles.rules}>
            <Text style={[styles.rulesTitle, {color: quiz.accentColor}]}>Rules</Text>
            <Text style={styles.ruleText}>Answer each question without outside help.</Text>
            <Text style={styles.ruleText}>Each correct answer is worth 5 points.</Text>
            <Text style={styles.ruleText}>You can replay the quiz from the result screen.</Text>
          </View>

          <View style={styles.actions}>
            <PrimaryButton
              accessibilityLabel={`Start ${quiz.title} quiz`}
              onPress={() =>
                navigation.navigate('QuizQuestion', {
                  quizId: quiz.id,
                  questionIndex: 0,
                  mistakes: '[]',
                  score: 0,
                })
              }
            >
              Start Quiz
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
    gap: spacing.md,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  content: {
    alignItems: 'center',
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  card: {
    backgroundColor: colors.panel,
    borderRadius: radii.lg,
    borderWidth: 2,
    maxWidth: 920,
    overflow: 'hidden',
    width: '100%',
  },
  heroBand: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    padding: spacing.lg,
  },
  heroCopy: {
    flex: 1,
    justifyContent: 'center',
    minWidth: 280,
  },
  heroImage: {
    borderColor: '#FFFFFF',
    borderRadius: radii.md,
    borderWidth: 3,
    flex: 1,
    height: 260,
    minWidth: 280,
  },
  eyebrow: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: spacing.lg,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '900',
    marginTop: spacing.xs,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    marginTop: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.lg,
  },
  metaItem: {
    backgroundColor: '#F4FAFF',
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flex: 1,
    padding: spacing.md,
  },
  metaValue: {
    color: colors.primaryDark,
    fontSize: 28,
    fontWeight: '800',
  },
  metaLabel: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  rules: {
    backgroundColor: '#FFFDF7',
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
  },
  rulesTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: spacing.sm,
  },
  ruleText: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    padding: spacing.lg,
  },
});
