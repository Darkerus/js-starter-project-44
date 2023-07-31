#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';
import gcd from '../src/games/gcd.js';
import writeCongratulations from '../src/winning-chek.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(gcd);

writeCongratulations(isWinning, name);
