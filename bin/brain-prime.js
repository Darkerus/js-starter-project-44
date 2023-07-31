#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';
import prime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(prime);

if (isWinning) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again ${name}!`);
}
