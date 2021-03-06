// arrays with list of questions and correct answer
var questions = [
    {   title: "Commonly used data types DO NOT include:",
        choices: ["Alerts", "Strings", "Numbers", "Booleans"],
        correctAnswer: "Alerts"
    },
    {   title: "The condition in an if / else statement is enclosed within ____________.",
        choices: ["Curly brackets", "Quotes","Parentheses", "Square brackets"],
        correctAnswer: "Parentheses"
    },
    {   title: "Arrays in Javascript can be used to store _____________.",
        choices: ["Booleans", "Numbers and strings", "Other arrays", "All of the above"],
        correctAnswer: "All of the above"
    },
    {   title: "String values must be enclosed within _______________ when being assigned to variables.",
        choices: ["Quotes", "Commas", "Curly brackets", "Parenthesis"],
        correctAnswer: "Quotes"
    },
    {   title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal / bash", "console.log", "for loops"],
        correctAnswer: "console.log"
    },
];

// initial variables 
var score = 0
var initialIndex = 0
var penalty = 10
var pointsEarned = 10
var time = 60
var resultsIndex = 0
var totalFinalScores = []


//inital document selectors 
var questiondiv = document.querySelector("#question");
var optionsdiv = document.querySelector("#options");
var pagediv = document.querySelector("#page-content");
var start = document.querySelector("#btn");
var displayTimer = document.querySelector("#timer");
var mainContent = document.querySelector ("#main-content")
var answer = document.querySelector ("#answer")

//functions

    // clear page function 
    var clearHtmlandStart = function () {
        mainContent.innerHTML = ""
        gettingStarted (initialIndex);
        };

    //get started and circle through questions

    var gettingStarted = function (initialIndex) {
       if (initialIndex <= 4 ) {
            //clear previous html
            mainContent.innerHTML = ""
                //add title
                var questionTitle = document.createElement ("div");
                questionTitle.id = "question";
                questionTitle.innerHTML = "<h1 class='center'>" + questions[initialIndex].title+ "</h1>" 
                // add ul
                var questionOl = document.createElement ("ol");
                questionOl.id = "olist"
                //add li elements
                var questionLi0 = document.createElement ("li");
                questionLi0.id = "0";
                questionLi0.textContent = questions[initialIndex].choices[0]
                var questionLi1 = document.createElement ("li");
                questionLi1.id = "1";
                questionLi1.textContent = questions[initialIndex].choices[1]
                var questionLi2 = document.createElement ("li");
                questionLi2.id = "2";
                questionLi2.textContent = questions[initialIndex].choices[2]
                var questionLi3 = document.createElement ("li");
                questionLi3.id = "3";
                questionLi3.textContent = questions[initialIndex].choices[3]
            
                //append results
               // mainContent.appendChild(pagediv);
                mainContent.appendChild(questionTitle);  
                questionTitle.appendChild(questionOl);
                questionOl.appendChild(questionLi0);  
                questionOl.appendChild(questionLi1);
                questionOl.appendChild(questionLi2);
                questionOl.appendChild(questionLi3);  

                questionOl.addEventListener("click", (answerCompare));
            }
            else {
                clearInterval(startTimer);
                displayTimer.textContent = "Timer: Stopped"
                results ();
            }
        }

    //Compare and add answer
        var answerCompare = function (event) {
            var compare = event.target;
            if (compare.matches("li")) {
                if (compare.textContent == questions[initialIndex].correctAnswer) {
                    score = score + pointsEarned;
                    console.log (score)
                    answer.textContent = "You are Correct!"
                } else {
                    // Will deduct -10 seconds off time for wrong answers
                    time = time - penalty;
                    answer.textContent = "Wrong! The right answer is:  " + questions[initialIndex].correctAnswer;
                }
                console.log(initialIndex)
                initialIndex++
                gettingStarted (initialIndex);
            }
        };

    //timer 

    var startTimer = function(){
        setInterval (function () {
            if (initialIndex >=5) {
                clearInterval(startTimer);
                displayTimer.textContent = "Timer: Stopped"
        } else if (time >= 1) {
            time = time -1
            console.log (time)
            displayTimer.textContent = "Timer: " + time
            } else if (time <= 0) {
                time = 0.5
                displayTimer.textContent = "Time's up!"
                clearInterval(startTimer);
                results();
            }
        }, 1000)};


    // Main Results Page

    var results = function () {
        mainContent.innerHTML = ""
        var allDone = document.createElement ("div");
        allDone.id = "question";
        allDone.innerHTML = "<h1 class='center'> All Done! </h1>" 

        //score
        answer.textContent = "Your final Score is: " + score

        // Results Label
        var resultsLabel = document.createElement("label");
        resultsLabel.id = "resultsLabel";
        resultsLabel.textContent = "Enter your initials: ";

        // Results input 

        var resultsInput = document.createElement("input");
        resultsInput.id = "resultsInput";
        resultsInput.setAttribute ("type", "Text")
        resultsInput.textContent = " ";

        // Results submit

        var resultsSubmit = document.createElement("button");
        resultsSubmit.id = "resultsSubmit";
        resultsSubmit.setAttribute ("type", "submit")
        resultsSubmit.textContent = "Submit";

        //append results
        mainContent.appendChild(allDone);
        pagediv.appendChild(resultsLabel);
        pagediv.appendChild(resultsInput);
        pagediv.appendChild(resultsSubmit);

        SaveDetails ();
    }

//local storage of data

var SaveDetails = function () {
    resultsSubmit.addEventListener("click", function(){
        //window.alert("Testing");
        var saveInitials = resultsInput.value;
        var finalResult = {
            userInitials: saveInitials, 
            finalScore: score, }
        if (saveInitials === "" ){
            window.alert("Please enter your Initials");
        //debugger;
        } else {
           var existing = localStorage.getItem ("Final Score");
           console.log (existing)
           if (existing === null) {
            totalFinalScores = [];
            } else {
            totalFinalScores = JSON.parse(existing);
            }
           //debugger;
           totalFinalScores.push (finalResult);
            localStorage.setItem ("Final Score", JSON.stringify(totalFinalScores))
            window.location.replace("./highScores.html");  
            }
        }
    )}

//general event listeners 
start.addEventListener("click", clearHtmlandStart);
start.addEventListener("click", startTimer);
