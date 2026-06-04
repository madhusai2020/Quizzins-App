import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {getQuizById} from '../../data/quizData';
import {colors, radii, spacing} from '../../theme';

export default function QuizFeedback({navigation, route}) {
  const {quizId, questionIndex = 0, score = 0, selectedAnswer, isCorrect} =
    route.params ?? {};
  const quiz = getQuizById(quizId);
  const question = quiz?.questions[questionIndex];

  if (!quiz || !question) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Feedback not found</Text>
      </View>
    );
  }

  const isLastQuestion = questionIndex + 1 >= quiz.questions.length;

  const handleNext = () => {
    if (isLastQuestion) {
      navigation.navigate('QuizResult', {quizId, score});
      return;
    }

    navigation.navigate('QuizQuestion', {
      quizId,
      questionIndex: questionIndex + 1,
      score,
    });
  };

  return (
    <View style={[styles.container, isCorrect ? styles.correctBg : styles.wrongBg]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.status}>{isCorrect ? 'Correct' : 'Not quite'}</Text>
          <Text style={styles.title}>
            {isCorrect ? 'Nice work.' : 'Good try. Keep going.'}
          </Text>
          <Text style={styles.bodyText}>Your answer: {selectedAnswer}</Text>
          {!isCorrect ? (
            <Text style={styles.bodyText}>Correct answer: {question.correctAnswer}</Text>
          ) : null}
          <Text style={styles.scoreText}>Score: {score}</Text>

          <PrimaryButton
            accessibilityLabel={isLastQuestion ? 'View quiz results' : 'Go to next question'}
            onPress={handleNext}
            variant={isCorrect ? 'success' : 'primary'}
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </PrimaryButton>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  correctBg: {
    backgroundColor: '#DCFCE7',
  },
  wrongBg: {
    backgroundColor: '#FEE2E2',
  },
  centered: {
    alignItems: 'center',
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
    maxWidth: 560,
    padding: spacing.xl,
    width: '100%',
  },
  status: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  bodyText: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 26,
    marginBottom: spacing.sm,
  },
  scoreText: {
    color: colors.primaryDark,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: spacing.lg,
    marginTop: spacing.sm,
  },
});

