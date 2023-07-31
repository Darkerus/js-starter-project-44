import gameCore from './core.js';

export default {
  ...gameCore,
  mainText: 'What number is missing in the progression?',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [
    { numbers: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23], missing: 15 },
    { numbers: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23], missing: 17 },
    { numbers: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23], missing: 7 },
  ],
  questionGenFunction: ({ numbers, missing }) => `Question: ${numbers.join(' ').replace(missing, '..')}`,
  correctAsmwerFunction: ({ missing }) => missing,
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === +playerAnswer,
  // prettier-ignore
  incorrectAnswerFunction: (correctAnswer, playerAnswer) => `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};
