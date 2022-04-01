var pageBody = document.querySelector("body");
var pageHeader = document.querySelector("jumbotron");
var currentDayEl = document.querySelector("#currentDay");

var d = new Date();
currentDayEl.innerHTML = d.toDateString;
