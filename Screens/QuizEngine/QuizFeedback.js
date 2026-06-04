import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {getQuizById} from '../../data/quizData';
import {colors, radii, spacing} from '../../theme';

function parseMistakes(mistakes) {
  if (Array.isArray(mistakes)) {
    return mistakes;
  }

  if (typeof mistakes !== 'string') {
    return [];
  }

  try {
    const parsedMistakes = JSON.parse(mistakes);
    return Array.isArray(parsedMistakes) ? parsedMistakes : [];
  } catch {
    return [];
  }
}

export default function QuizFeedback({navigation, route}) {
  const {quizId, questionIndex = 0, score = 0, selectedAnswer, isCorrect} =
    route.params ?? {};
  const mistakes = parseMistakes(route.params?.mistakes);
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
  const feedbackImage = isCorrect
    ? 'https://st2.depositphotos.com/1605004/6196/v/450/depositphotos_61961463-stock-illustration-comic-book-explosion-with-text.jpg'
    : 'https://img.freepik.com/premium-vector/comic-speech-bubble-with-word-oops_530597-634.jpg';

  const handleNext = () => {
    if (isLastQuestion) {
      navigation.navigate('QuizResult', {quizId, mistakes: JSON.stringify(mistakes), score});
      return;
    }

    navigation.navigate('QuizQuestion', {
      quizId,
      questionIndex: questionIndex + 1,
      mistakes: JSON.stringify(mistakes),
      score,
    });
  };

  return (
    <View style={[styles.container, isCorrect ? styles.correctBg : styles.wrongBg]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, isCorrect ? styles.correctCard : styles.wrongCard]}>
          <View style={styles.feedbackHeader}>
            <View style={styles.feedbackCopy}>
              <Text style={styles.status}>{isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}</Text>
              <Text style={styles.title}>
                {isCorrect ? 'Good job.' : 'Next one is yours.'}
              </Text>
              <Text style={styles.bodyText}>Your answer: {selectedAnswer}</Text>
              {!isCorrect ? (
                <Text style={styles.bodyText}>Correct answer: {question.correctAnswer}</Text>
              ) : null}
              <Text style={styles.scoreText}>Score: {score}</Text>
            </View>

            <Image
              accessibilityIgnoresInvertColors
              resizeMode="contain"
              source={{uri: feedbackImage}}
              style={styles.feedbackImage}
            />
          </View>

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
    backgroundColor: '#22C55E',
  },
  wrongBg: {
    backgroundColor: '#FCA5A5',
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
    borderRadius: radii.lg,
    borderWidth: 3,
    maxWidth: 840,
    padding: spacing.xl,
    width: '100%',
  },
  correctCard: {
    borderColor: colors.success,
  },
  wrongCard: {
    borderColor: colors.danger,
  },
  feedbackHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    marginBottom: spacing.lg,
  },
  feedbackCopy: {
    flex: 1,
    minWidth: 260,
  },
  feedbackImage: {
    flex: 1,
    height: 220,
    minWidth: 240,
  },
  status: {
    color: colors.ink,
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.ink,
    fontSize: 24,
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
