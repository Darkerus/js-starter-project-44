import readLineSync from 'readline-sync';

export default function askName() {
  console.log('May I have your name?');
  const name = readLineSync.question('Your answer: ');
  console.log(`Hello, ${name} !`);
  return name;
}
