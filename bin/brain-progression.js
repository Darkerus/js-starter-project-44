#!/usr/bin/env node

import askName from '../src/cli.js';
import gameBase from '../src/game-base.js';
import progression from '../src/games/progression.js';
import writeCongratulations from '../src/winning-chek.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const isWinning = gameBase(progression);

writeCongratulations(isWinning, name);
