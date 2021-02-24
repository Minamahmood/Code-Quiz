var btnEl = document.querySelector("#btn");
var mainEl = document.querySelector("#main");

var btnHandler = function() {
    // event.preventDefault();

    var question = document.createElement("div")

    mainEl.appendChild(question);
    var heading = document.createElement("h1");
    heading.textContent = "commonly used data types Do Not Include";
    question.appendChild(heading);

    var answerOne = document.createElement("button");
    answerOne.textContent = "booleans";
    question.appendChild(answerOne);
    var answerTwo = document.createElement("button");
    answerTwo.textContent = "strings";
    question.appendChild(answerTwo);
    var answerThree = document.createElement("button");
    answerThree.textContent = "numbers";
    question.appendChild(answerThree);
    var answerFour = document.createElement("button");
    answerFour.textContent = "alerts";
    question.appendChild(answerFour);
};
var question = [{
    question: "The condition in an if/else statement is enclosed with ________.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    correct: "3"
}]






btnEl.addEventListener("click", btnHandler);