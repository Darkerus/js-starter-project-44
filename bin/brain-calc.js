#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';

const random = (min, max) => +(Math.random() * (max - min)).toFixed(0);

const gameConfig = {
  mainText: 'What is the result of the expression?',
  defaultQuestion: 'Your answer: ',
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
  correctPredicate: (correctAnswer, playerAnswer) => correctAnswer === +playerAnswer,
  incorrectAnswerFunction: (correctAnswer, playerAnswer) =>
    `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(gameConfig);

if (isWinning) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again ${name}!`);
}
