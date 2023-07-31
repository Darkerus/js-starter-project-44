import gameCore from './core.js';

import random from '../helpers/random.js';

export default {
  ...gameCore,

  mainText: 'What is the result of the expression?',
  arrayOfQuestions: [
    { firstNumer: random(1, 20), secondNumer: random(1, 80), operand: 'plus' },
    { firstNumer: random(20, 100), secondNumer: random(5, 26), operand: 'minus' },
    { firstNumer: random(1, 40), secondNumer: random(1, 9), operand: 'multiple' },
  ],
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
};
