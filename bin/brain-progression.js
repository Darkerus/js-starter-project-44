#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';
import progression from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(progression);

if (isWinning) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again ${name}!`);
}
