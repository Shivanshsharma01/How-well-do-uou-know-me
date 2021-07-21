var readlineSync = require ('readline-sync');
 var score = 0;
var userName = readlineSync.question ("Hello! what is your name? ");
console.log ("Welcome " + userName + " To How Well Do You Know Shivansh");



function play (question,answer){
  var userAnswer = readlineSync.question (question);
  if (userAnswer===answer)
  {
    console.log ("Your answer was right!")
    score++;
  }
  else {
    console.log ("Your answer was wrong ")
  }
  {
    console.log("Your Score is = " + score)
    console.log ("----------")
  }
}

var questionBank = [
  questionOne = {
    question: "What is my age? ",
    answer: "21"
  },
   questionTwo = {
    question: "What is my Hometown? ",
    answer: "nangal"
  },
   questionThree = {
    question: "What is my shoe size? ",
    answer: "10"
  },
   questionFour = {
    question: "What is my pubg username? ",
    answer: "kinghades"
  }
]

for (i=0; i<questionBank.length; i = i+ 1){
  play (questionBank[i].question, questionBank[i].answer)
}
