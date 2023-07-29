#!/usr/bin/env node

import askIsEven from '../src/even-game.js';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
askIsEven(name);
