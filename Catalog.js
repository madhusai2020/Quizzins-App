import React, {useMemo, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import {quizzes} from './data/quizData';
import {colors, radii, spacing} from './theme';

function getSearchText(quiz) {
  return [
    quiz.title,
    quiz.description,
    quiz.hook,
    quiz.difficulty,
    quiz.shortLabel,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export default function Catalog({navigation}) {
  const [searchText, setSearchText] = useState('');

  const filteredQuizzes = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return quizzes;
    }

    return quizzes.filter((quiz) => getSearchText(quiz).includes(query));
  }, [searchText]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Quiz catalog</Text>
          <Text style={styles.title}>Choose your next quick win</Text>
          <Text style={styles.subtitle}>
            Short topics, clear progress, and instant answer review.
          </Text>
          <TextInput
            accessibilityLabel="Search quizzes"
            style={styles.search}
            placeholder="Search by topic or level"
            placeholderTextColor={colors.muted}
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
          />
        </View>

        <View style={styles.grid}>
          {filteredQuizzes.map((quiz) => (
            <View key={quiz.id} style={[styles.card, {borderTopColor: quiz.accentColor}]}>
              <View style={styles.cardTop}>
                <View style={[styles.badge, {backgroundColor: quiz.accentColor}]}>
                  <Text style={styles.badgeText}>{quiz.shortLabel}</Text>
                </View>
                <View style={styles.difficultyPill}>
                  <Text style={styles.difficultyText}>{quiz.difficulty}</Text>
                </View>
              </View>

              <Text style={styles.quizTitle}>{quiz.title}</Text>
              <Text style={styles.quizHook}>{quiz.hook}</Text>

              <View style={styles.metaRow}>
                <Text style={styles.metaText}>{quiz.questions.length} questions</Text>
                <Text style={styles.metaText}>{quiz.estimatedMinutes} min</Text>
                <Text style={styles.metaText}>{quiz.questions.length * 5} pts</Text>
              </View>

              <PrimaryButton
                accessibilityLabel={`Start ${quiz.title} quiz`}
                onPress={() => navigation.navigate('QuizIntro', {quizId: quiz.id})}
                style={styles.startButton}
              >
                Start
              </PrimaryButton>
            </View>
          ))}

          {filteredQuizzes.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No quizzes found</Text>
              <Text style={styles.emptyText}>Try searching for math, coding, movies, or starter.</Text>
            </View>
          ) : null}
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
  content: {
    alignItems: 'center',
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    maxWidth: 760,
    width: '100%',
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
    marginTop: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 48,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 25,
    marginBottom: spacing.md,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  search: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 2,
    color: colors.ink,
    fontSize: 16,
    height: 48,
    marginBottom: spacing.lg,
    maxWidth: 440,
    paddingHorizontal: spacing.md,
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    maxWidth: 1120,
    width: '100%',
  },
  card: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderTopWidth: 6,
    borderWidth: 1,
    flexBasis: 300,
    flexGrow: 1,
    maxWidth: 540,
    minHeight: 260,
    padding: spacing.lg,
  },
  cardTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
    borderRadius: 999,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  difficultyPill: {
    backgroundColor: '#ECFDF5',
    borderColor: '#BBF7D0',
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  difficultyText: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  quizTitle: {
    color: colors.ink,
    fontSize: 25,
    fontWeight: '900',
    marginTop: spacing.md,
  },
  quizHook: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
    marginTop: spacing.xs,
    minHeight: 48,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  metaText: {
    backgroundColor: '#F8FAFC',
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    color: colors.ink,
    fontSize: 13,
    fontWeight: '800',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  startButton: {
    alignSelf: 'flex-start',
    minWidth: 112,
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: spacing.xl,
    width: '100%',
  },
  emptyTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
  },
  emptyText: {
    color: colors.muted,
    fontSize: 16,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});
