#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';

const gameConfig = {
  mainText: 'Find the greatest common divisor of given numbers.',
  defaultQuestion: 'Your answer: ',
  arrayOfQuestions: [
    { firstNumer: 25, secondNumer: 50, answer: 25 },
    { firstNumer: 66, secondNumer: 33, answer: 6 },
    { firstNumer: 19, secondNumer: 79, answer: 1 },
  ],
  questionGenFunction: ({ firstNumer, secondNumer }) => `Question: ${firstNumer} ${secondNumer}`,
  correctAsmwerFunction: ({ answer }) => answer,
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
