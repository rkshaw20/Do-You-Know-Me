
var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var highScores = [
  {
    name: "Rohit",
    score: 7,
  },
]

var questions = [{
  question: "What's my fav movie?",
  answer: "Soul"
}, {
  question: "My fav city?",
  answer: "Mumbai"
}, {
  question: " Where do I live?",
  answer: "Kolkata"
}, {
  question: "My first laptop company?",
  answer: "Acer"
}, {
  question: "My birth month?",
  answer: "May"
}, {
  question: "What is my fav dish?",
  answer: "Chole Bhature"
}, {
  question: "What is my fav sweet?",
  answer: "Gulab Jamun"
}, {
  question: "What is my fav book?",
  answer: "How to win friends and influence people?"
}, {
  question: "I like mountains or beach?",
  answer: "Mountains"
}, {
  question: "What is my dream travel destination?",
  answer: "Space"
}
];

function welcome() {
  var username = readlineSync.question(chalk.blue("what's your name?"));
  console.log("welcome " + chalk.yellow.bold(username) + " Do you know Raj? Let's play a game to see if you know me");
  console.log("------");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You are wrong!"))
  }
  console.log("------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log(chalk.yellow("you scored: ", score));
  console.log(" Check out the high scores, if you should be their ping me and I'll update it: ");
  highScores.map(score => console.log(score.name, ": ", score.score))
}

welcome()
game()
showScores()