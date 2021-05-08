// arrays with list of questions and answer
var questions = [
    {   title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {   title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {   title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {   title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes"
    },
    {   title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        correctAnswer: "console log"
    },
];

// initial variables 
var score = 0
var initialIndex = 0
var penalty = 10
var pointsEarned = 10
var time = 60

//inital document selectors 
var questiondiv = document.querySelector("#question");
var optionsdiv = document.querySelector("#options");
var pagediv = document.querySelector("#page-content");
var start = document.querySelector("#btn");
var displayTimer = document.querySelector("#timer");
var mainContent = document.querySelector ("#main-content")
var answer = document.querySelector ("#answer")

// variables as the quiz progresses

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
            //adding content
                //add title
                var questionTitle = document.createElement ("div");
                questionTitle.id = "question";
                questionTitle.innerHTML = "<h1 class='center'>" + questions[initialIndex].title+ "</h1>" 
                // add ul
                var questionUl = document.createElement ("ul");
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
                questionTitle.appendChild(questionUl);
                questionUl.appendChild(questionLi0);  
                questionUl.appendChild(questionLi1);
                questionUl.appendChild(questionLi2);
                questionUl.appendChild(questionLi3);  

                questionUl.addEventListener("click", (answerCompare));
            }
            else {
                mainContent.innerHTML = ""
                answer.textContent = "the end"
                var currentTime = time
                displayTimer.textContent = "Timer: " + currentTime 
                clearInterval(startTimer)
                //time = 0
            }
        }

    //Compare and add answer
        var answerCompare = function (event) {
            var compare = event.target;
            if (compare.matches("li")) {
                if (compare.textContent == questions[initialIndex].correctAnswer) {
                    score = score + pointsEarned;
                    console.log (score)
                    answer.textContent = "Correct! The answer is:  " + questions[initialIndex].correctAnswer;
                } else {
                    // Will deduct -10 seconds off time for wrong answers
                    time = time - penalty;
                    answer.textContent = "Wrong! The correct answer is:  " + questions[initialIndex].correctAnswer;
                }
                //console.log(initialIndex)
                initialIndex++
                gettingStarted (initialIndex);
            }

        };

// !!!!!!START HERE!!!!!!! 
     //find a way to run timer 
     //and account for scores
     // perhaps use if timer = 0 then run getting started with value =4
     // create imput after else to capture information and then
      //develop store high scores

//timer 

var startTimer = function(){
    setInterval (function () {
        if (initialIndex >=5) {
            clearInterval(startTimer);
            displayTimer.textContent = "Time's up!"
            //display current stop time instead of time's up


    } else if (time >= 1) {
        time = time -1
        //console.log (time)
        displayTimer.textContent = "Timer: " + time
        } else if (time <= 0) {
             displayTimer.textContent = "Timer: " + 0
             clearInterval(startTimer);
        }
    }, 1000)};

//local storage of data


//event listeners 
start.addEventListener("click", clearHtmlandStart);
start.addEventListener("click", startTimer);



















//// tests draft 

// if (initialIndex <= 3){
//     initialIndex++
// }else if (initialIndex >= 4) {
// break
// console.log ("pausing")
// }

// FIRST ANSWER COMPARE  var answerCompare = function () {
            // var questionAnswer = document.createElement ("div");
            // questionAnswer.id = "answer";
            // questionAnswer.innerHTML = "sample answer"
            // pagediv.appendChild(questionAnswer);
            // console.log(idexArray)

            // };





//initial fuction
            // var gettingStarted = function () {

            //     for (idexArray; idexArray < questions.length; idexArray++) {
            //         //clear previous html
            //         mainContent.innerHTML = ""
            //         //adding content
            //             //add title
            //             var questionTitle = document.createElement ("div");
            //             questionTitle.id = "question";
            //             questionTitle.innerHTML = "<h1 class='center'>" + questions[idexArray].title + "</h1>" 
            //             // add ul
            //             var questionUl = document.createElement ("ul");
            //             //add li elements
            //             var questionLi0 = document.createElement ("li");
            //             questionLi0.id = "0";
            //             questionLi0.textContent = questions[idexArray].choices[0]
            //             var questionLi1 = document.createElement ("li");
            //             questionLi1.id = "1";
            //             questionLi1.textContent = questions[idexArray].choices[1]
            //             var questionLi2 = document.createElement ("li");
            //             questionLi2.id = "2";
            //             questionLi2.textContent = questions[idexArray].choices[2]
            //             var questionLi3 = document.createElement ("li");
            //             questionLi3.id = "3";
            //             questionLi3.textContent = questions[idexArray].choices[3]
                    
            //             //append results
            //            // mainContent.appendChild(pagediv);
            //             mainContent.appendChild(questionTitle);  
            //             questionTitle.appendChild(questionUl);
            //             questionUl.appendChild(questionLi0);  
            //             questionUl.appendChild(questionLi1);
            //             questionUl.appendChild(questionLi2);
            //             questionUl.appendChild(questionLi3);  
                        
            //             debugger; 
        
            //             questionUl.addEventListener("click", (answerCompare));
        
            //             //add next up function 