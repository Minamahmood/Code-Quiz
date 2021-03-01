/*  global variables: */
var body = document.body;
var corrAnsSum = 0;
var flag = 0;
var timeLeft = 0;
var highscore = 0;
var highScorearr = [];
var finalScore = 0;
var timeInterval = 0;
//=====================================================//
// creat an Array of quizQuestions and answers//
var quizQuestions = [{
        question: "Is JavaScript a case-sensitive language?",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a",
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.?",
        answers: {
            a: "curly brackets",
            b: "parenthesi",
            c: "square brackets",
            d: "parenthesis",
            correctAnswer: "c",
        },
    },
    {
        question: "Arrays in javaScript can be used to store ________. ?",
        answers: {
            a: "numbers and string",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        correctAnswer: "c",
    },

    {
        question: "Which of the following code creates an object?.",
        answers: {
            a: "var book = Object();",
            b: "var book = new Object();",
            c: "var book = new OBJECT();",
            d: "var book = new Book();",
        },
        correctAnswer: "b",
    },
    {
        question: "string values must be enclosed within ________ when being assigned to variable.?",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
        },
        correctAnswer: "b",
    },
];
// the Start Button for  the Home page will start the Quiz//
var startBtnEl = document.createElement("button");
startBtnEl.innerText = "Start Test";
//  Home page Elements:
var h1El = document.createElement("h1");
h1El.textContent = "Coding Quiz challenge in Java Script";
var h2El = document.createElement("h2");
h2El.textContent = "This is a timed coding quiz with multiple-choice questions";
var fpageDiv = document.createElement("div");
body.appendChild(fpageDiv);
var headerDiv = document.createElement("div");
var hscoreDiv = document.createElement("div");
// Set High Score link function
hscoreDiv.innerHTML =
    '<a onclick="getHighScore()" href="javascript:;"> Show High Score </a>';
hscoreDiv.querySelector("a").setAttribute("style", "text-decoration:none");
var timerDiv = document.createElement("div");
headerDiv.appendChild(hscoreDiv);
headerDiv.appendChild(timerDiv);
body.appendChild(headerDiv);
var mainDiv = document.createElement("div");
var footerDiv = document.createElement("div");
var qaDiv = document.createElement("div");
var qDiv = document.createElement("h1");
qaDiv.appendChild(qDiv);
var aDiv = document.createElement("div");
qaDiv.appendChild(aDiv);
mainDiv.appendChild(qaDiv);
body.appendChild(mainDiv);
body.appendChild(footerDiv);
var resultDiv = document.createElement("h2");
footerDiv.appendChild(resultDiv);
// first page:
fpageDiv.appendChild(startBtnEl);
fpageDiv.appendChild(h1El);
fpageDiv.appendChild(h2El);
// input for high score:
var inputSaveScore = document.createElement("input");
inputSaveScore.id = "hscoreEl";
// button to save high score:
var btnSaveScore = document.createElement("button");
btnSaveScore.innerText = "Save High Score";
btnSaveScore.setAttribute(
    "style",
    "background: blueviolet; color: #fff; border-radius: 5px; padding:5px; margin: 0 10px"
);
// button to go back:
var btnGoback = document.createElement("button");
btnGoback.innerText = "Go back";
btnGoback.setAttribute(
    "style",
    "background: blueviolet;color: #fff;border-radius: 5px;padding: 1em;font-size: 1em"
);
// button clear high score:
var btnClearScore = document.createElement("button");
btnClearScore.innerText = "Clear Score";
btnClearScore.setAttribute(
    "style",
    "background: blueviolet;color: #fff;border-radius: 5px;padding: 1em;font-size: 1em"
);
// set css style for home page:
body.setAttribute(
    "style",
    "font-family: sans-serif; font-family: sans-serif; padding: 20px; margin: 20px;"
);
headerDiv.setAttribute(
    "style",
    "display: flex; justify-content: space-between; margin:20px;"
);
fpageDiv.setAttribute(
    "style",
    "margin-top: 5em; display: flex; flex-direction: column; align-items: center; justify-content: center;"
);
startBtnEl.setAttribute(
    "style",
    "width: 20%; height: 100px; background: blueviolet; color: #fff; font-size: 2em; border-radius: 10px;"
);
//timer is set for 60s //
function startTimer() {
    timeLeft = 60;
    timeInterval = setInterval(function() {
        timerDiv.textContent = "Time Left: " + timeLeft + " s";
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz("timeup");
        }
    }, 1000);
}
//  End Quiz Function:
//     This is initiated after time is over from startTimer function
//     Gets parameter el: if value is timeup, set message to Time Up and set score to total correct answer sum
//     If initiated after the Quiz is over set final score to time left + correct answer sum Show Final score  And asks to save score with Initials

function endQuiz(el) {
    if (el == "timeup") {
        finalScore = corrAnsSum;
        clearInterval(timeInterval);
        timerDiv.textContent = "";
        mainDiv.innerHTML =
            "<h2>Time Up!!</h2> Your final score is: " + finalScore + ".</br></br>";
    } else {
        if (corrAnsSum == 0) {
            finalScore = 0; // if answered all answers wrong and still time is left, set final score to 0
        } else {
            finalScore = timeLeft + corrAnsSum; // set finalscore to timeleft + correctanswer sum
        }
        clearInterval(timeInterval);
        timerDiv.textContent = "";
        mainDiv.innerHTML =
            "<h2>All Done!!</h2> Your final score is: " + finalScore + ".</br></br>";
        // Show input and button to sace high score
        mainDiv.innerHTML += "<label>Enter Initials: </label>";
        mainDiv.appendChild(inputSaveScore);
        mainDiv.appendChild(btnSaveScore);
    }
}
// Show Question Function
//  * Called by Start Quiz, Parameter: Obj of Question
//  * Call Print Question to show Question in HTML

function showQuestion(question) {
    var ques = question.question;
    var ans = question.answers;
    var corAns = question.correctAnswer;
    // call print questions function:
    printQuestion(ques, ans, corAns);
}

//  Print Question Function
//   Called by showQuestion
//   Set Html Element and css programically ans print question
//   Set correct answer attribute on the link

function printQuestion(ques, ans, corAns) {
    qDiv.textContent = "";
    aDiv.textContent = "";
    qDiv.textContent += ques;
    for (letter in ans) {
        aDiv.innerHTML +=
            '<a class="linkbutton" onclick="check(event)" href="javascript:;" value = ' +
            letter +
            " correctans = " +
            corAns +
            ">" +
            letter +
            ": " +
            ans[letter] +
            "</a>" +
            "</br>";
    }
    var all = document.getElementsByClassName("linkbutton");
    for (var i = 0; i < all.length; i++) {
        all[i].setAttribute(
            "style",
            "text-align: center; color: white; background: blueviolet; padding: 10px; text-decoration: none; border-radius: 5px; width: 200px;"
        );
    }
    aDiv.setAttribute("style", "display:flex; flex-direction:column");
}
//========================================//
/**the function is working .
 * Check Answer function:
 * get correct answer value from attribute and check if correct answer is clicked
 * if correct answer set text to Correct Answer
 * if wrong then deduct 10s from timer and set text to wrong Answer.
 */
function check(event) {
    var getAns = event.target.getAttribute("value");
    var correctAns = event.target.getAttribute("correctans");
    if (getAns === correctAns) {
        corrAnsSum += 10;
        resultDiv.textContent = "Correct Answer";
    } else {
        timeLeft = timeLeft - 10;
        resultDiv.textContent = "Wrong Answer";
    }
    resultDiv.setAttribute(
        "style",
        "font-style: italic; color: grey; border-top: 2px solid; padding: 10px;"
    );
    flag++;
    startQuiz(flag);
}
//start Quiz  with question then goes to the next question , if there is no next question the quiz will end //
function startQuiz() {
    if (flag < quizQuestions.length) {
        showQuestion(quizQuestions[flag]);
    } else {
        endQuiz();
    }
}
//hight score function //
function getHighScore() {
    mainDiv.textContent = "";
    fpageDiv.textContent = "";
    headerDiv.textContent = "";
    footerDiv.textContent = "";
    var highScorearr = JSON.parse(localStorage.getItem("highscoredetails"));
    headerDiv.innerHTML = "<h1> High Score Page </h1>";
    headerDiv.setAttribute(
        "style",
        "display: flex;justify-content: center;margin:20px;"
    );
    if (highScorearr != null) {
        highScoreDiv = document.createElement("div");
        highScoreDiv.setAttribute(
            "style",
            "display: flex; align-items: center; justify-content: space-around; background: #FAEBD7; padding: .5em; margin:1px;"
        );
        nameDiv = document.createElement("h3");
        scoreDiv = document.createElement("h3");
        nameDiv.textContent = "Name";
        scoreDiv.textContent = "Score";
        highScoreDiv.appendChild(nameDiv);
        highScoreDiv.appendChild(scoreDiv);
        mainDiv.append(highScoreDiv);
        mainDiv.innerHTML += "";
        for (i = 0; i < highScorearr.length; i++) {
            nameDiv.textContent = highScorearr[i].initials;
            scoreDiv.textContent = highScorearr[i].highscore;
            highScoreDiv.appendChild(nameDiv);
            highScoreDiv.appendChild(scoreDiv);
            mainDiv.append(highScoreDiv);
            mainDiv.innerHTML += "";
        }
    } else {
        mainDiv.textContent = "No High score set yet";
    }
    btnDiv = document.createElement("div");
    btnDiv.setAttribute(
        "style",
        "display:flex; justify-content:space-around; margin: 2em;"
    );
    btnDiv.appendChild(btnGoback);
    btnDiv.appendChild(btnClearScore);
    mainDiv.appendChild(btnDiv);
}
//reset the quiz//
var startBtnHandler = function(event) {
    fpageDiv.remove();
    startTimer();
    startQuiz();
};
//created an object for the intial and hight score//
var saveHighScoreHandler = function(event) {
    var getInitials = document.getElementById("hscoreEl").value;
    if (getInitials == "") {
        alert("Please Enter your initials ");
    } else {
        var highScoreObj = {
            initials: getInitials,
            highscore: finalScore,
        };
        var highScorearr = JSON.parse(localStorage.getItem("highscoredetails"));
        if (highScorearr != null) {
            // if highscore array is not empty:
            highScorearr.push(highScoreObj);
            highScorearr = highScorearr.sort((a, b) =>
                a.highscore > b.highscore ? -1 : 1
            ); // sort array by high score
        } else {
            highScorearr = [];
            highScorearr.push(highScoreObj);
        }
        localStorage.setItem("highscoredetails", JSON.stringify(highScorearr));
        getHighScore();
    }
};
// Back Button Handler: Go back to Home Page
//when you click the btn
var backButtonHandler = function(event) {
    location.reload();
};
// Clear Score Button Handler: Delete local storage data and go back to home page
var clearScoreHandler = function(event) {
    localStorage.clear();
    location.reload();
};
// Start button click:
startBtnEl.addEventListener("click", startBtnHandler);
// Save High Score button Click:
btnSaveScore.addEventListener("click", saveHighScoreHandler);
// Go Back button Click:
btnGoback.addEventListener("click", backButtonHandler);
// Clear Score button Click:
btnClearScore.addEventListener("click", clearScoreHandler);
// Quiz is end //
Untitled;