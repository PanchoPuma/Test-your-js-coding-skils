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
var idexArray = 0
var penalty = 10
var pointsEarned = 10

//inital document selectors 
var questiondiv = document.querySelector("#question");
var optionsdiv = document.querySelector("#options");
var pagediv = document.querySelector("#page-content");
var start = document.querySelector("#btn");
var timer = document.querySelector("#timer");
var mainContent = document.querySelector ("#main-content")
var answer = document.querySelector ("#answer")

// variables as the quiz progresses

//functions

    // clear page function 
    var clearHtmlandStart = function () {
        mainContent.innerHTML = ""
        //insert timer ability
        gettingStarted ();
        };

    //get started and circle through questions

    var gettingStarted = function () {

        for (idexArray; idexArray < questions.length; idexArray++) {
            //clear previous html
            mainContent.innerHTML = ""
            //adding content
                //add title
                var questionTitle = document.createElement ("div");
                questionTitle.id = "question";
                questionTitle.innerHTML = "<h1 class='center'>" + questions[idexArray].title + "</h1>" 
                // add ul
                var questionUl = document.createElement ("ul");
                //add li elements
                var questionLi0 = document.createElement ("li");
                questionLi0.id = "0";
                questionLi0.textContent = questions[idexArray].choices[0]
                var questionLi1 = document.createElement ("li");
                questionLi1.id = "1";
                questionLi1.textContent = questions[idexArray].choices[1]
                var questionLi2 = document.createElement ("li");
                questionLi2.id = "2";
                questionLi2.textContent = questions[idexArray].choices[2]
                var questionLi3 = document.createElement ("li");
                questionLi3.id = "3";
                questionLi3.textContent = questions[idexArray].choices[3]
            
                //append results
               // mainContent.appendChild(pagediv);
                mainContent.appendChild(questionTitle);  
                questionTitle.appendChild(questionUl);
                questionUl.appendChild(questionLi0);  
                questionUl.appendChild(questionLi1);
                questionUl.appendChild(questionLi2);
                questionUl.appendChild(questionLi3);  
                
                debugger; 

                questionUl.addEventListener("click", (answerCompare));

                //add next up function 

            }
        };

    //Compare and add answer 
              // !!!!!!START HERE!!!!!!! 
                //find a way to  select the correct option using the IDs and move on use switch to check answers posibly 
                // find a way to display answer. If idexArray = 0 display nothing  (use switch) maybe try listItem.addEventListener("click", (compare));
                //find a way to run timer 
                //develop store high scores

        var answerCompare = function (event) {
            //answer.innerHTML = """
            var compare = event.target;
            if (compare.matches("li")) {
                var questionAnswer = document.createElement ("div");
                questionAnswer.id = "answer"

                if (compare.textContent == questions[0].correctAnswer) {
                    //score = score + pointsEarned;
                    questionAnswer.textContent = "Correct! The answer is:  " + questions[0].correctAnswer;
                } else {
                    // Will deduct -10 seconds off time for wrong answers
                    //timer = timer - penalty;
                    questionAnswer.textContent = "Wrong! The correct answer is:  " + questions[0].correctAnswer;
                }
                pagediv.appendChild(questionAnswer);
                console.log(idexArray)

                //display answer
             //ifarrayindex = 0 then display nothing
            //otherwise display the previous result
            }

             //if using indexarray aslong as it 
             // idexArray < questions.length then idexArray++)
            //go back to previous fuction and do it again
            //else go to results 

        };

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


// FIRST ANSWER COMPARE  var answerCompare = function () {
            // var questionAnswer = document.createElement ("div");
            // questionAnswer.id = "answer";
            // questionAnswer.innerHTML = "sample answer"
            // pagediv.appendChild(questionAnswer);
            // console.log(idexArray)

            // };

            // var answerCompare = function (event) {
            //     //answer.innerHTML = """
            //     var compare = event.target;
            //     if (compare.matches("li")) {
            //         var questionAnswer = document.createElement ("div");
            //         questionAnswer.id = "answer";
            //         questionAnswer.innerHTML = "sample answer"
            //         pagediv.appendChild(questionAnswer);
            //         console.log(idexArray)