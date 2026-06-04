import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getQuizById} from '../../data/quizData';
import {colors, radii, spacing} from '../../theme';

const answerColors = ['#FEE2E2', '#DCFCE7', '#DBEAFE', '#FEF3C7'];

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

export default function QuizQuestion({navigation, route}) {
  const {quizId, questionIndex = 0, score = 0} = route.params ?? {};
  const mistakes = parseMistakes(route.params?.mistakes);
  const quiz = getQuizById(quizId);
  const question = quiz?.questions[questionIndex];

  if (!quiz || !question) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Question not found</Text>
      </View>
    );
  }

  const totalQuestions = quiz.questions.length;
  const progress = `${questionIndex + 1} of ${totalQuestions}`;

  const handleAnswer = (answer) => {
    const isCorrect = answer === question.correctAnswer;
    const nextMistakes = isCorrect
      ? mistakes
      : [
          ...mistakes,
          {
            correctAnswer: question.correctAnswer,
            prompt: question.prompt,
            selectedAnswer: answer,
          },
        ];

    navigation.navigate('QuizFeedback', {
      quizId,
      questionIndex,
      mistakes: JSON.stringify(nextMistakes),
      score: isCorrect ? score + 5 : score,
      selectedAnswer: answer,
      isCorrect,
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: quiz.backgroundColor}]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Text style={[styles.quizTitle, {color: quiz.accentColor}]}>{quiz.title} Quiz</Text>
          <Text style={styles.progress}>Question {progress}</Text>
        </View>

        <View style={styles.scoreBar}>
          <View
            style={[
              styles.scoreFill,
              {
                backgroundColor: quiz.accentColor,
                width: `${((questionIndex + 1) / totalQuestions) * 100}%`,
              },
            ]}
          />
        </View>

        <View style={[styles.card, {borderColor: quiz.accentColor}]}>
          <Image
            accessibilityIgnoresInvertColors
            resizeMode="cover"
            source={{uri: question.imageUrl ?? quiz.imageUrl}}
            style={styles.image}
          />
          <View style={styles.questionArea}>
            <Text style={styles.prompt}>{question.prompt}</Text>
            <Text style={styles.scoreText}>Current score: {score}</Text>

            <View style={styles.answerGrid}>
              {question.answers.map((answer, index) => (
                <TouchableOpacity
                  accessibilityLabel={`Answer ${answer}`}
                  accessibilityRole="button"
                  activeOpacity={0.82}
                  key={answer}
                  onPress={() => handleAnswer(answer)}
                  style={[styles.answerButton, {backgroundColor: answerColors[index]}]}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
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
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  headerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 860,
    width: '100%',
  },
  quizTitle: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: '800',
  },
  progress: {
    color: colors.muted,
    fontSize: 16,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  scoreBar: {
    backgroundColor: '#DCEEF7',
    borderRadius: 999,
    height: 10,
    marginBottom: spacing.lg,
    marginTop: spacing.md,
    maxWidth: 860,
    overflow: 'hidden',
    width: '100%',
  },
  scoreFill: {
    height: '100%',
  },
  card: {
    backgroundColor: colors.panel,
    borderRadius: radii.lg,
    borderWidth: 2,
    maxWidth: 860,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    height: 260,
    width: '100%',
  },
  questionArea: {
    padding: spacing.lg,
  },
  prompt: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
  },
  scoreText: {
    color: colors.muted,
    fontSize: 16,
    fontWeight: '700',
    marginTop: spacing.sm,
  },
  answerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  answerButton: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flexBasis: 260,
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: 72,
    padding: spacing.md,
  },
  answerText: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  title: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: '800',
  },
});
