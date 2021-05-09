// Variables selectors
var questiondiv = document.querySelector("#question");
var pagediv = document.querySelector("#page-content");
var clear = document.querySelector("#btn-clear");
var restart = document.querySelector("#btn-restart");
var mainContent = document.querySelector ("#main-content")
var olist = document.querySelector ("#ol")

//clear local storage and thus the page
clear.addEventListener("click", function () {
    localStorage.clear();
    olist.innerHTML = ""
});

//restart quiz

restart.addEventListener("click", function () {
    window.location.replace("./index.html");
});

//displayResults

var storedResultsDisplay = localStorage.getItem("Final Score");
storedResultsDisplay = JSON.parse(storedResultsDisplay);

console.log(storedResultsDisplay)
//debugger

if (storedResultsDisplay !== null) {

    for (var i = 0; i < storedResultsDisplay.length; i++) {

        var li = document.createElement("li");
        li.textContent = (storedResultsDisplay[i].userInitials) + " " + storedResultsDisplay[i].finalScore;
        olist.appendChild(li);

    }
}