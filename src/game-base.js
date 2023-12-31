import readLineSync from 'readline-sync';
import gameCore from './games/core.js';

export default function gameBase(options = gameCore) {
  const {
    mainText,
    defaultQuestion,
    arrayOfQuestions,
    questionGenFunction,
    correctAsmwerFunction,
    correctPredicate,
    incorrectAnswerFunction,
  } = options;

  console.log(mainText);

  let result = true;

  arrayOfQuestions.forEach((question) => {
    console.log(questionGenFunction(question));
    if (!question || !result) {
      return;
    }

    const answer = readLineSync.question(defaultQuestion);
    const correctAnswer = correctAsmwerFunction(question);
    const isCorrect = correctPredicate(correctAnswer, answer);
    if (!isCorrect) {
      console.log(incorrectAnswerFunction(correctAnswer, answer));
      result = false;
    }
  });

  return result;
}
