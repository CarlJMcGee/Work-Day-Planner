var pageBody = document.querySelector("body");
var pageHeader = document.querySelector("jumbotron");
var currentDayEl = document.querySelector("#currentDay");

var dateObj = new Date();

currentDayEl.innerHTML = dateObj.toDateString();
