var btnEl = document.querySelector("#btn");
var mainEl = document.querySelector("#main");
var corentQuestion = 0;
var questions = [{
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        correct: "3"
    }, {
        question: "Arrays in javaScript can be used to store ________. ",
        choice1: "numbers and string",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correct: "3"
    }, {
        question: "string values must be enclosed within ________ when being assigned to variable.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        correct: "2"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "javascript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "consol.log",
        correct: "3"
    },
    {
        question: "Commonly used data types Do Not include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alert",
        choice4: "numbers",
        correct: "2"
    },
];


var score = 75;


function submitAnswer() {
    var answer = this.event.target.dataset.answer

    if (answer != questions[corentQuestion].correct) {
        console.log("wrong")
    } else {
        console.log("correct")
    }

}

var btnHandler = function() {

    // event.preventDefault();
    document.querySelector("#start").style.display = "none";


    createQuestion(questions[0])
};

function createQuestion(question) {
    console.log(question)
    var questionEl = document.createElement("div");

    mainEl.appendChild(questionEl);
    var heading = document.createElement("h1");

    //set title
    heading.textContent = "commonly used data types Do Not Include:";
    questionEl.appendChild(heading);

    //set first botton
    var answerOne = document.createElement("button");
    answerOne.setAttribute("onclick", "submitAnswer()")
    answerOne.dataset.answer = 1 // "3"
    answerOne.textContent = question.choice1;
    questionEl.appendChild(answerOne).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerOne).style.color = "white";

    //set second botton
    var answerTwo = document.createElement("button");
    answerTwo.setAttribute("onclick", "submitAnswer()")
    answerTwo.dataset.answer = 2
    answerTwo.textContent = question.choice2;
    questionEl.appendChild(answerTwo).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerTwo).style.color = "white";

    //set therd botton
    var answerThree = document.createElement("button");
    answerThree.setAttribute("onclick", "submitAnswer()")
    answerThree.dataset.answer = 3
    answerThree.textContent = question.choice3;
    questionEl.appendChild(answerThree).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerThree).style.color = "white";

    //set forth botton
    var answerFour = document.createElement("button");
    answerFour.setAttribute("onclick", "submitAnswer()")
    answerFour.dataset.answer = 4
    answerFour.textContent = question.choice4;
    questionEl.appendChild(answerFour).style.backgroundColor = "blueviolet";
    questionEl.appendChild(answerFour).style.color = "white";


}





btnEl.addEventListener("click", btnHandler);





// var total_seconds = 30 * 1;
// var c_minutes = parseInt(total_seconds / 60);
// var c_seconds = parseInt(total_seconds % 60);
// var timer;

// function CheckTime() {
//     document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

//     if (total_seconds <= 0) {
//         score();
//     } else {
//         total_seconds = total_seconds - 1;
//         c_minutes = parseInt(total_seconds / 60);
//         c_seconds = parseInt(total_seconds % 60);
//         timer = setTimeout(CheckTime, 1000);
//     }
// }
// timer = setTimeout(CheckTime, 1000);

// function score() {
//     // stop timer
//     clearInterval(timer);

//     //Referencing the value of the questions
//     var q1 = document.forms.form.q1.value;
//     var q2 = document.forms.form.q2.value;
//     var q3 = document.forms.form.q3.value;

//     // disable form
//     var elements = document.getElementById("questions").elements;
//     for (var i = 0, len = elements.length; i < len; ++i) {
//         elements[i].disabled = true;
//     }

//     //Array for the questions
//     var questions = [q1, q2, q3];

//     //Answers for each question
//     var answers = ["b", "b", "b"];

//     //variable to keep track of the points
//     var points = 0;
//     var total = 3;
//     //max score 

//     //Making use of a for loop to iterate over the questions and answers arrays
//     for (var i = 0; i < total; i++) {
//         if (questions[i] == answers[i]) {
//             points = points + 1; //Increment the score by 2 for every correct answer given
//         }
//     }

//     //CSS for questions
//     var q = document.getElementById("p");

//     q.style.fontSize = "40px";
//     q.style.textAlign = "center";
//     q.innerHTML = "You got " + points + " out of " + total +
//         "<br />" +
//         "you used " + (29 - Math.floor(total_seconds)) + " seconds";

//     return false;