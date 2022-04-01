var pageBody = document.querySelector("body");
var pageHeader = document.querySelector(".jumbotron");
var currentDayEl = document.querySelector("#currentDay");
var blockContainerEl = document.querySelector(".container");
var dateObj = new Date();

currentDayEl.innerHTML = dateObj.toDateString();

var dayHours = [];
for (var i = 0; i < 24; i++) {
  dayHours.push(i + 1);
}
console.log(dayHours);
var scheduleSlots = dayHours.length * 1;
console.log(scheduleSlots);

var timeBlockEl = document.createElement("div");
timeBlockEl.className = "time-block";
timeBlockEl.innerHTML = "";
blockContainerEl.appendChild(timeBlockEl);

for (var i = 0; i < scheduleSlots; i++) {
  var blockRowEl = document.createElement("div");
  blockRowEl.className = "row";
  timeBlockEl.appendChild(blockRowEl);
  var hourEl = document.createElement("p");
  hourEl.className = "hour col-1 text-right pt-3";
  hourEl.innerHTML = i + ":00";
  blockRowEl.appendChild(hourEl);
  var desciptionEl = document.createElement("p");
  desciptionEl.className = "description col-9 mb-0 future";
  desciptionEl.innerHTML = "";
  blockRowEl.appendChild(desciptionEl);
  var saveEl = document.createElement("button");
  saveEl.className = "saveBtn p-4";
  saveEl.innerHTML = "💾";
  blockRowEl.appendChild(saveEl);
}
