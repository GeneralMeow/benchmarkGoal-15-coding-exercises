const readline = require('readline');
// ### 1: Guess The Number
//
// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
//
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function numGenerator( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor( Math.random() * ( max - min )) + min;
}


rl.question('Pick a number between 1 - 100 ', ( answer ) => {
  let compNum = numGenerator(0, 100);

  if( answer === "Exit" || "exit" ) {
    rl.close()
  }
  if( compNum === answer) {
    console.log('You Won! You guessed correct!')
    rl.close()
  }
  if( compNum < answer ) {
    console.log( 'Computers answer: ', compNum )
    console.log('Not quite! You guessed too high!')
    rl.close()
  }
  if( compNum > answer ) {
    console.log( 'Computers answer: ', compNum )
    console.log('Not quite! You guessed too low!')
    rl.close()
  }
})
