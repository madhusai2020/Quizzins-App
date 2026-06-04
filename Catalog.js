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

export default function Catalog({navigation}) {
  const [searchText, setSearchText] = useState('');

  const filteredQuizzes = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return quizzes;
    }

    return quizzes.filter((quiz) => quiz.title.toLowerCase().includes(query));
  }, [searchText]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Catalog</Text>
          <Text style={styles.subtitle}>Choose a quiz and start practicing.</Text>
          <TextInput
            accessibilityLabel="Search quizzes"
            style={styles.search}
            placeholder="Search quizzes"
            placeholderTextColor={colors.muted}
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
          />
        </View>

        <View style={styles.list}>
          {filteredQuizzes.map((quiz, index) => (
            <View key={quiz.id} style={styles.row}>
              <View style={styles.quizCopy}>
                <Text style={styles.quizName}>
                  {index + 1}) {quiz.title}
                </Text>
                <Text style={styles.quizDescription}>
                  {quiz.questions.length} questions - {quiz.questions.length * 5} points
                </Text>
              </View>
              <PrimaryButton
                accessibilityLabel={`View ${quiz.title} quiz`}
                onPress={() => navigation.navigate('QuizIntro', {quizId: quiz.id})}
                style={styles.viewButton}
              >
                View
              </PrimaryButton>
            </View>
          ))}

          {filteredQuizzes.length === 0 ? (
            <Text style={styles.emptyText}>No quizzes found.</Text>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  content: {
    alignItems: 'center',
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    maxWidth: 720,
    width: '100%',
  },
  title: {
    color: '#034EA2',
    fontSize: 44,
    fontWeight: '800',
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.ink,
    fontSize: 18,
    marginBottom: spacing.md,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  search: {
    backgroundColor: colors.panel,
    borderColor: '#326789',
    borderRadius: radii.md,
    borderWidth: 2,
    color: colors.ink,
    fontSize: 16,
    height: 46,
    marginBottom: spacing.lg,
    maxWidth: 420,
    paddingHorizontal: spacing.md,
    width: '100%',
  },
  list: {
    gap: spacing.sm,
    maxWidth: 980,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    backgroundColor: colors.panel,
    borderColor: '#7AB8D4',
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    minHeight: 68,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  quizCopy: {
    flex: 1,
  },
  quizName: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  quizDescription: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 3,
  },
  viewButton: {
    minWidth: 92,
  },
  emptyText: {
    color: colors.ink,
    fontSize: 18,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
});
