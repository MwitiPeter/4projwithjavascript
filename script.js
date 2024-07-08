const prompt = require("prompt-sync")()

console.log("Welcome to do you Know Me")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1= prompt("What are my three names as written in the ID? ");
const correctAnswer1 = "PETER MWITI MUCHAI";

if (answer1.toUpperCase() === correctAnswer1){
 console.log("you got it correct!");
 correctAnswers++;
} else {
    console.log("You're Wrong ...");
}

const answer2= prompt("How old am I ?");
const correctAnswer2 = "20";

if (answer2.toLowerCase() === correctAnswer2){
 console.log("you got it correct!");
 correctAnswers++;
} else {
    console.log("You're Wrong ...");
}

const answer3= prompt("Between math and english what do  like ?");
const correctAnswer3 = "math";

if (answer3.toLowerCase() === correctAnswer3){
 console.log("you got it correct!");
 correctAnswers++;
} else {
    console.log("You're Wrong ...");
}
 const percent = Math.round((correctAnswers/totalQuestions) * 100)

console.log("You got", correctAnswers,"questions correct! ")
console.log("You scored",percent.toString()+"%")



