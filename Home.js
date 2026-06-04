import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import {quizzes} from './data/quizData';
import {colors, radii, spacing} from './theme';

const featuredQuizzes = quizzes.slice(0, 4);
const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.brand}>Quizzins</Text>
            <Text style={styles.headline}>Pick a topic. Test yourself. Beat your score.</Text>
            <Text style={styles.subhead}>
              Quick quizzes for school subjects, sports, movies, language, and everyday facts.
              Learn from missed answers and replay whenever you want.
            </Text>

            <View style={styles.actions}>
              <PrimaryButton
                accessibilityLabel="Open quiz catalog"
                onPress={() => navigation.navigate('Catalog')}
                style={styles.primaryAction}
              >
                Explore Quizzes
              </PrimaryButton>
            </View>
          </View>

          <View style={styles.scoreCard}>
            <Text style={styles.scoreEyebrow}>Today's challenge</Text>
            <Text style={styles.scoreTitle}>Can you go 20 / 20?</Text>
            <Text style={styles.scoreText}>
              Every quiz is short enough for a quick break and clear enough to replay.
            </Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{quizzes.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{totalQuestions}</Text>
            <Text style={styles.statLabel}>Questions</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Points each</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Start with a favorite</Text>
          <Text style={styles.sectionSubtitle}>Featured quizzes ready to play now.</Text>
        </View>

        <View style={styles.quizGrid}>
          {featuredQuizzes.map((quiz) => (
            <TouchableOpacity
              accessibilityLabel={`Start ${quiz.title} quiz`}
              accessibilityRole="button"
              activeOpacity={0.84}
              key={quiz.id}
              onPress={() => navigation.navigate('QuizIntro', {quizId: quiz.id})}
              style={[styles.quizCard, {borderColor: quiz.accentColor}]}
            >
              <View style={[styles.iconBadge, {backgroundColor: quiz.accentColor}]}>
                <Text style={styles.iconText}>{quiz.shortLabel}</Text>
              </View>
              <Text style={styles.quizTitle}>{quiz.title}</Text>
              <Text style={styles.quizHook}>{quiz.hook}</Text>
              <Text style={styles.quizMeta}>
                {quiz.questions.length} questions - {quiz.estimatedMinutes} min
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7F2',
  },
  content: {
    alignItems: 'center',
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  hero: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    maxWidth: 1120,
    width: '100%',
  },
  heroCopy: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    flex: 2,
    minWidth: 300,
    padding: spacing.xl,
  },
  brand: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  headline: {
    color: colors.ink,
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 50,
  },
  subhead: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 28,
    marginTop: spacing.md,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  primaryAction: {
    minWidth: 170,
  },
  scoreCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: radii.lg,
    flex: 1,
    justifyContent: 'center',
    minWidth: 280,
    padding: spacing.xl,
  },
  scoreEyebrow: {
    color: '#B9F6D7',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  scoreTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
  },
  scoreText: {
    color: '#D7FBE8',
    fontSize: 17,
    lineHeight: 26,
    marginTop: spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.lg,
    maxWidth: 1120,
    width: '100%',
  },
  statCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flex: 1,
    minWidth: 180,
    padding: spacing.lg,
  },
  statValue: {
    color: colors.primaryDark,
    fontSize: 34,
    fontWeight: '900',
  },
  statLabel: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '800',
    marginTop: spacing.xs,
  },
  sectionHeader: {
    marginTop: spacing.xl,
    maxWidth: 1120,
    width: '100%',
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: colors.muted,
    fontSize: 16,
    marginTop: spacing.xs,
  },
  quizGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.md,
    maxWidth: 1120,
    width: '100%',
  },
  quizCard: {
    backgroundColor: colors.panel,
    borderRadius: radii.lg,
    borderWidth: 2,
    flexBasis: 240,
    flexGrow: 1,
    minHeight: 190,
    padding: spacing.lg,
  },
  iconBadge: {
    alignItems: 'center',
    borderRadius: 999,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
  quizTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
    marginTop: spacing.md,
  },
  quizHook: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.xs,
  },
  quizMeta: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: '900',
    marginTop: spacing.md,
  },
});
