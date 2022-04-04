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
var scheduleSlots = dayHours.length * 1;

var timeBlockEl = document.createElement("div");
timeBlockEl.className = "time-block";
timeBlockEl.innerHTML = "";
blockContainerEl.appendChild(timeBlockEl);

for (var i = 0; i < scheduleSlots; i++) {
  // create a row for timeslot
  var blockRowEl = document.createElement("div");
  blockRowEl.className = "row";
  timeBlockEl.appendChild(blockRowEl);
  // set slot hour
  var hourEl = document.createElement("p");
  hourEl.className = "hour col-1 text-right pt-3";
  hourEl.innerHTML = i + ":00";
  blockRowEl.appendChild(hourEl);
  // create description box and set data- hour Id
  var descriptionEl = document.createElement("p");
  descriptionEl.className = "description col-9 mb-0";
  descriptionEl.innerHTML = "";
  descriptionEl.setAttribute("data-hour-id", i);
  blockRowEl.appendChild(descriptionEl);
  // set appropiate description color per past, present, future
  pastPresentFutureCheck(descriptionEl);
  // create save button
  var saveEl = document.createElement("button");
  saveEl.className = "saveBtn p-4";
  saveEl.innerHTML = "💾";
  blockRowEl.appendChild(saveEl);
}

$(".description").dblclick("p", function (e) {
  e.preventDefault();

  var text = $(this).text().trim();
  var textInput = $("<textarea>")
    .addClass(e.target.classList.value + " text-area")
    .val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");

  $(".saveBtn").click(function (e) {
    e.preventDefault();
    text = $(textInput).val();
    var description = $("<p>")
      .addClass(textInput[0].classList.value)
      .text(text);
    $(textInput).replaceWith(description);
  });
});

function pastPresentFutureCheck(element) {
  if ($(element).data("hourId") < dateObj.getHours()) {
    element.classList.add("past");
  } else if ($(element).data("hourId") === dateObj.getHours()) {
    element.classList.add("present");
  } else {
    element.classList.add("future");
  }
}
