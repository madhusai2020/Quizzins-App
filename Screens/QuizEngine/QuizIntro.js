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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            accessibilityIgnoresInvertColors
            resizeMode="cover"
            source={{uri: quiz.imageUrl}}
            style={styles.heroImage}
          />
          <Text style={styles.eyebrow}>Quiz Details</Text>
          <Text style={styles.title}>{quiz.title} Quiz</Text>
          <Text style={styles.description}>{quiz.description}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>{quiz.questions.length}</Text>
              <Text style={styles.metaLabel}>Questions</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>{quiz.questions.length * 5}</Text>
              <Text style={styles.metaLabel}>Points</Text>
            </View>
          </View>

          <View style={styles.rules}>
            <Text style={styles.rulesTitle}>Rules</Text>
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
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    maxWidth: 760,
    overflow: 'hidden',
    width: '100%',
  },
  heroImage: {
    height: 240,
    width: '100%',
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 34,
    fontWeight: '800',
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
  },
  description: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 26,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.lg,
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
    paddingHorizontal: spacing.lg,
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

