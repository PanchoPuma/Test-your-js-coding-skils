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
var idexQuestionArray = 0
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
    var clearHtmlandStart = function () {
        pagediv.innerHTML = ""
        //insert timer ability
        gettingStarted ();
        };

    //get started and circle through questions

    var gettingStarted = function () {

        for (var i = 0; i < questions.length; i++) {
            //clear previous html
            pagediv.innerHTML = ""
            //adding content
                //add title
                var questionTitle = document.createElement ("div");
                questionTitle.id = "question";
                questionTitle.innerHTML = "<h1 class='center'>" + questions[i].title + "</h1>" 
                // add ul
                var questionUl = document.createElement ("ul");
                //add li elements
                var questionLi0 = document.createElement ("li");
                questionLi0.id = "0";
                questionLi0.textContent = questions[i].choices[0]
                var questionLi1 = document.createElement ("li");
                questionLi1.id = "1";
                questionLi1.textContent = questions[i].choices[1]
                var questionLi2 = document.createElement ("li");
                questionLi2.id = "2";
                questionLi2.textContent = questions[i].choices[2]
                var questionLi3 = document.createElement ("li");
                questionLi3.id = "3";
                questionLi3.textContent = questions[i].choices[3]

                
                //add answer 
                var questionAnswer = document.createElement ("div");
                questionAnswer.id = "answer";
                questionAnswer.innerHTML = ""
            
                //append results
                pagediv.appendChild(questionTitle);  
                questionTitle.appendChild(questionUl);
                questionUl.appendChild(questionLi0);  
                questionUl.appendChild(questionLi1);
                questionUl.appendChild(questionLi2);
                questionUl.appendChild(questionLi3);  
                pagediv.appendChild(questionAnswer);
                
                debugger; // !!!!!!START HERE!!!!!!! 
                //find a way to  select the correct option using the IDs and move on use switch to check answers posibly 
                // find a way to display answer. If i = 0 display nothing  (use switch)
                //find a way to run timer 
                //develop store high scores
                }
    };

    //compare answers

    //time's up 

//local storage of data


//event listeners 
start.addEventListener("click", clearHtmlandStart);















//// tests draft 

// get started function original
// var questionTitle = document.createElement ("div");
        // questionTitle.id = "question";
        // questionTitle.innerHTML = "<h1 class='center'>" + questions[idexQuestionArray].title + "</h1>";
        // pagediv.appendChild(questionTitle);
  //  };

// get started function with for 
// var gettingStarted = function () {
        
//     for (var i = 0; i < questions.length; i++) {
//     var questionTitle = document.createElement ("div");
//     questionTitle.id = "question";
//     questionTitle.innerHTML = "<h1 class='center'>" + questions[i].title + "</h1>";
//     pagediv.appendChild(questionTitle);   
//     }
// };