#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';

const gameConfig = {
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
