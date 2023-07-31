import gameCore from './core.js';

export default {
  ...gameCore,

  mainText: 'Find the greatest common divisor of given numbers.',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [
    { firstNumer: 25, secondNumer: 50, answer: 25 },
    { firstNumer: 66, secondNumer: 33, answer: 33 },
    { firstNumer: 19, secondNumer: 79, answer: 1 },
  ],
  questionGenFunction: ({ firstNumer, secondNumer }) => `Question: ${firstNumer} ${secondNumer}`,
  correctAsmwerFunction: ({ answer }) => answer,
};
