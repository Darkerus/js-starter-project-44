#!/usr/bin/env node

import askName from '../src/cli.js';
import even from '../src/games/even.js';
import gameBase from '../src/game-base.js';
import writeCongratulations from '../src/winning-chek.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(even);

writeCongratulations(isWinning, name);
