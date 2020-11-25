var readline = require('readline-sync');

var score = 0;
var highScore = [
{
  name: "Tej",
  score: 4,
},
]

function quiz(question,answer)
{
  userAnswer = readline.question(question);
  if(userAnswer === answer){
    console.log("You were right!");
    score++;}
  else{
    console.log("You were wrong!");
  }
  console.log("-------")
}

var ques = [
  {
    question:'Where do I live? ',
    answer: 'Mumbai',
  },
  {
    question:'Who is my favourite superhero? ',
    answer: 'Ironman',
  },
  {
    question:'Do I like Marvel or DC? ',
    answer: 'Marvel',
  },
  {
    question:'What is my mother tounge? ',
    answer: 'Gujarati',
  }
]

for(var i=0; i < ques.length; i++)
{
  quiz(ques[i].question,ques[i].answer);
}

console.log("You scored : " +score);

if(score>=highScore[0].score){
  console.log("Congratulations!! You have scored a HIGH SCORE!!!\n");
  console.log("Please Share a screenshot of your score so that I can update the scores.\n");
}
