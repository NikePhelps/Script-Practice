"use strict";

// function guessNumber() {
//     let randomNumber = (Math.floor(Math.random() * 10) + 1);
//     while (true) {
//       let userChoice = prompt("Enter a number between 1 and 10.");
//       if (userChoice > randomNumber) {
//         userChoice = prompt("The guess was too high. Guess lower.");
//       } else if (userChoice < randomNumber) {
//         userChoice = prompt("The guess was too low. Guess higher.");
//       } else {
//         console.log("You win!");
//         break;
//       }
//     }
//   }

//   guessNumber();

// function convertTemp(number, degree) {
//     if (degree === "C") {
//         console.log(number * 9 / 5 + 32);
//     } if (degree === "F") {
//         console.log((number -32) * 5 / 9)
//     }
// }

// convertTemp(75, "F");
// convertTemp(50, "F");
// convertTemp(175, "C");
// convertTemp(275, "C");

// let userWins = 0;
// let computerWins = 0;
// const listOfChoices = ["Rock", "Paper", "Scissors"];
// while (true) {
//   if (userWins === 3) {
//     console.log("You are the champion!");
//     break;
//   } else if (computerWins === 3) {
//     console.log("You are a loser! HaHa!");
//     break;
//   }
//   let userChoice = prompt("Rock, Paper, or Scissors");
//   let computerChoice =
//     listOfChoices[Math.floor(Math.random() * listOfChoices.length)];
//   if (userChoice === computerChoice) {
//     console.log("Draw");
//   }

//   if (userChoice === "Rock" && computerChoice === "Scissors") {
//     console.log("User wins!");
//     userWins++;
//   }
//   if (userChoice === "Paper" && computerChoice === "Rock") {
//     console.log("User wins!");
//     userWins++;
//   }
//   if (userChoice === "Scissors" && computerChoice === "Paper") {
//     console.log("User wins!");
//     userWins++;
//   }
//   if (userChoice === "Rock" && computerChoice === "Paper") {
//     console.log("Computer wins!");
//     computerWins++;
//   }
//   if (userChoice === "Scissors" && computerChoice === "Rock") {
//     console.log("Computer wins!");
//     computerWins++;
//   }
//   if (userChoice === "Paper" && computerChoice === "Scissors") {
//     console.log("Computer wins!");
//     computerWins++;
//   } if (userChoice === "Quit") {
//       break;
//   }
// }

function predictTheFuture() {
    let question = prompt("Ask a question");
    let computerResponse = responses[Math.floor(Math.random() * responses.length)];
    let result = console.log(`${question} + ${computerResponse}`);
    if (question === "Quit") {
        break;
    }
}
const responses = ["Yes", "No", "Maybe", "Ask again later"];
predictTheFuture();