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
        gettingStarted (initialIndex);
        };

    //get started and circle through questions

    var gettingStarted = function (initialIndex) {
       
            //clear previous html
            mainContent.innerHTML = ""
            //adding content
                //add title
                var questionTitle = document.createElement ("div");
                questionTitle.id = "question";
                questionTitle.innerHTML = "<h1 class='center'>" + questions[initialIndex].title+ "</h1>" 
                // add ul
                debugger;
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
                
                debugger; 

                questionUl.addEventListener("click", (answerCompare));

                //add next up function 

            
        }

    //Compare and add answer 
              // !!!!!!START HERE!!!!!!! 
                //find a way to  select the correct option using the IDs and move on use switch to check answers posibly 
                // find a way to display answer. If idexArray = 0 display nothing  (use switch) maybe try listItem.addEventListener("click", (compare));
                //find a way to run timer 
                //develop store high scores

        var answerCompare = function (event) {
            var compare = event.target;
            if (compare.matches("li")) {
                if (compare.textContent == questions[initialIndex].correctAnswer) {
                    //score = score + pointsEarned;
                    answer.textContent = "Correct! The answer is:  " + questions[initialIndex].correctAnswer;
                } else {
                    // Will deduct -10 seconds off time for wrong answers
                    //timer = timer - penalty;
                    answer.textContent = "Wrong! The correct answer is:  " + questions[initialIndex].correctAnswer;
                }
                console.log(initialIndex)
                initialIndex++
                gettingStarted (initialIndex);


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