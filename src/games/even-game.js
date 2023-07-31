import readLineSync from 'readline-sync';

function askIsEven(number) {
  console.log(`Question: ${number}`);

  const isNumberEval = number % 2 === 0;
  const answer = readLineSync.question('Your answer: ');

  const isCorrect = (isEval, bool) => isEval === bool;

  const dispatcherResult = {
    yes: isCorrect(isNumberEval, true),
    no: isCorrect(isNumberEval, false),
  };

  const correctAswer = isNumberEval ? 'yes' : 'no';

  const result = dispatcherResult[answer] ?? false;

  console.log(result ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAswer}'.`);

  if (result) {
    return true;
  }
  return false;
}

export default function game(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (!askIsEven(15)) {
    console.log(`Let's try again ${name}!`);
    return;
  }

  if (!askIsEven(8)) {
    console.log(`Let's try again ${name}!`);
    return;
  }

  if (!askIsEven(5)) {
    console.log(`Let's try again ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
}
