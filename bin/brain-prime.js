#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';

const gameConfig = {
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
