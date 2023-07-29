import readLineSync from 'readline-sync';

const defaultGame = {
  mainText: 'What is the result of the expression?',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [{ firstNumer: 15, secondNumer: 35, operand: 'plus' }],
  questionGenFunction: ({ firstNumer, secondNumer, operand }) => {
    switch (operand) {
      case 'plus':
        return `Question: ${firstNumer} + ${secondNumer}`;
      case 'minus':
        return `Question: ${firstNumer} - ${secondNumer}`;
      case 'multiple':
        return `Question: ${firstNumer} * ${secondNumer}`;
      default:
        return false;
    }
  },
  correctAsmwerFunction: ({ firstNumer, secondNumer, operand }) => {
    switch (operand) {
      case 'plus':
        return firstNumer + secondNumer;
      case 'minus':
        return firstNumer - secondNumer;
      case 'multiple':
        return firstNumer * secondNumer;
      default:
        return false;
    }
  },
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === +playerAnswer,
  incorrectAnswerFunction: (correctAnswer, playerAnswer) =>
    `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};

export default function gameBase(options = defaultGame) {
  const {
    mainText,
    defaultQuestion,
    arrayOfQuestions,
    questionGenFunction,
    correctAsmwerFunction,
    correctPredicate,
    incorrectAnswerFunction,
  } = options;

  console.log(mainText);

  let result = true;

  for (let question of arrayOfQuestions) {
    console.log(questionGenFunction(question));
    if (!question) {
      continue;
    }
    const answer = readLineSync.question(defaultQuestion);
    const correctAnswer = correctAsmwerFunction(question);
    const isCorrect = correctPredicate(correctAnswer, answer);
    if (!isCorrect) {
      console.log(incorrectAnswerFunction(correctAnswer, answer));
      result = false;
      break;
    }
  }

  return result;
}
