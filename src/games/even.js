import gameCore from './core.js';

import random from '../helpers/random.js';

export default {
  ...gameCore,

  mainText: 'Answer "yes" if the number is even, otherwise answer "no".',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [
    //
    { number: random(1, 100) }, //
    { number: random(1, 100) }, //
    { number: random(1, 100) },
  ], //
  questionGenFunction: ({ number }) => `Question: ${number}`,
  correctAsmwerFunction: ({ number }) => (number % 2 === 0 ? 'yes' : 'no'),
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === playerAnswer,
};
