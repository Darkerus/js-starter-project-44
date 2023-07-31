export default {
  mainText: 'What is the result of the expression?',
  defaultQuestion: 'Your answer: ',
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === +playerAnswer,
  incorrectAnswerFunction: (correctAnswer, playerAnswer) =>
    `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};
