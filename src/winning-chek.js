export default function writeCongratulations(isWinning, name) {
  if (isWinning) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
