// arrays with list of questions and answer
var questions = [
    {   title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {   title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {   title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {   title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {   title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];

// initial variables 
var score = 0
var indexQuestion = 0
var penalty = 10

//inital document selectors 
var questiondiv = document.querySelector("#question");
var optionsdiv = document.querySelector("#options");
var pagediv = document.querySelector("#page-content");
var start = document.querySelector("#btn");
var timer = document.querySelector("#timer");

// variables as the quiz progresses

//functions

    // clear page function 
    var clearHtml = function () {
        pagediv.innerHTML = ""
        }
    //get started and circle through questions

    //compare answers

    //time's up 

//local storage of data

// var clearHtml = function () {
//     start.addEventListener("click", function () {
//         pagediv.innerHTML = ""
//     }) 
// }
// clearHtml();


    //event listeners 
start.addEventListener("click", clearHtml);