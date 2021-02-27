var btnEl = document.querySelector("#btn");
var mainEl = document.querySelector("#main");
var corentQuestion = 0;
var questions = [{
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        correct: "parenthesis"
    }, {
        question: "Arrays in javaScript can be used to store ________. ",
        choice1: "numbers and string",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correct: "booleans"
    }, {
        question: "string values must be enclosed within ________ when being assigned to variable.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        correct: "curly brakets"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "javascript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "consol.log",
        correct: "for loops"
    },
    {
        question: "Commonly used data types Do Not include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alert",
        choice4: "numbers",
        correct: "alert"
    },
];

function highScore() {

}








// // TODO: Create a variable to keep track of the 
// var score = 0;
// // TODO: Iterate over the questions array and display each question in a confirmation box
// for (let i = 0; i < questions.length; i++) {
//     var currentQuestion = questions[i];
//     var usersAnswer = confirm(currentQuestion.question);
//     // TODO: Check the user's answer against the correct answer
//     if (usersAnswer === currentQuestion.answer) {
//         alert('correct');
//         score++;
//     } else {
//         alert('wrong!');
//     }
//     // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
//     // TODO: At the end of the game, alert the user with the final score
// }
// // String interpolation
// alert(`Your final score is ${score}`);












//1000 will  run it every 1 second
var counter;
var count = 75
var cou

function time() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("time").innerHTML = "Time:" + count
}




function submitAnswer() {
    var answer = this.event.target.textContent
    console.log(answer)
    if (answer != questions[corentQuestion].correct) {
        console.log("wrong")
    } else {
        console.log("correct")
    }

}

var btnHandler = function() {
    counter = setInterval(time, 1000);
    // event.preventDefault();
    document.querySelector("#start").style.display = "none";


    createQuestion(questions[0])

};

function createQuestion() {

    var questionEl = document.createElement("div");

    mainEl.appendChild(questionEl);
    var heading = document.createElement("h1");

    //set title
    heading.textContent = questions[corentQuestion].question;
    questionEl.appendChild(heading);


    //set first botton
    var answerOne = document.createElement("button");
    answerOne.setAttribute("onclick", "submitAnswer()")
    answerOne.dataset.answer = questions[corentQuestion].correct;
    answerOne.textContent = questions[corentQuestion].choice1;
    questionEl.appendChild(answerOne).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerOne).style.color = "white";
    questionEl.appendChild(answerOne).style.padding = "20px 30px";



    //set second botton
    var answerTwo = document.createElement("button");
    answerTwo.setAttribute("onclick", "submitAnswer()")
    answerTwo.dataset.answer = questions[corentQuestion].correct
    answerTwo.textContent = questions[corentQuestion].choice2
    questionEl.appendChild(answerTwo).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerTwo).style.color = "white";
    questionEl.appendChild(answerTwo).style.padding = "20px 30px";


    //set therd botton
    var answerThree = document.createElement("button");
    answerThree.setAttribute("onclick", "submitAnswer()")
    answerThree.dataset.answer = questions[corentQuestion].correct
    answerThree.textContent = questions[corentQuestion].choice3;
    questionEl.appendChild(answerThree).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerThree).style.color = "white";
    questionEl.appendChild(answerThree).style.padding = "20px 30px";


    //set forth botton
    var answerFour = document.createElement("button");
    answerFour.setAttribute("onclick", "submitAnswer()")
    answerFour.dataset.answer = questions[corentQuestion].correct
    answerFour.textContent = questions[corentQuestion].choice4;
    questionEl.appendChild(answerFour).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerFour).style.color = "white";
    questionEl.appendChild(answerFour).style.padding = "20px 30px";



}

btnEl.addEventListener("click", btnHandler);
var form = document.getElementById('initials');
form.onsubmit = function() {
    e.preventDefault();



};