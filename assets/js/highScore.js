var questiondiv = document.querySelector("#question");
var pagediv = document.querySelector("#page-content");
var clear = document.querySelector("#btn-clear");
var goback = document.querySelector("#btn-goback");
var mainContent = document.querySelector ("#main-content")

//clear local storage 
clear.addEventListener("click", function () {
    localStorage.clear();
});

//go back

goback.addEventListener("click", function () {
    window.location.replace("./index.html");
});
