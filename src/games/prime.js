import gameCore from './core.js';

export default {
  ...gameCore,
  mainText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [
    { number: 7, answer: 'yes' },
    { number: 55, answer: 'no' },
    { number: 47, answer: 'yes' },
  ],
  questionGenFunction: ({ number }) => `Question: ${number}`,
  correctAsmwerFunction: ({ answer }) => answer,
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === playerAnswer,
};
