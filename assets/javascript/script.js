// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  $('.saveBtn').on('click', function (){
    var description = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, description)
  })
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//var for the current day
var dayDisplayEl = $('#currentDay');
//sets the current hour in military time
var currentHour = parseInt(dayjs().format('HH'));

//selectors for each time block
var timeBlock9 = $('#hour-9');
var timeBlock10 = $('#hour-10');
var timeBlock11 = $('#hour-11');
var timeBlock12 = $('#hour-12');
var timeBlock13 = $('#hour-13');
var timeBlock14 = $('#hour-14');
var timeBlock15 = $('#hour-15');
var timeBlock16 = $('#hour-16');
var timeBlock17 = $('#hour-17');

//var for the save button
// var saveButton = $('.saveBtn');

//arrays for the time blocks and the hour of the day
var blockArr = [timeBlock9, timeBlock10, timeBlock11, timeBlock12, timeBlock13, timeBlock14, timeBlock15, timeBlock16, timeBlock17]
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//function to display the current day
function displayDay() {
  var currentDay = dayjs().format('dddd MMMM D');
  dayDisplayEl.text(currentDay);
}
displayDay()

//compares the current time to the hour in military time and updates the classes if the current time is larger
for (var i = 0; i < timeArr.length; i++) {
  if (currentHour > timeArr[i]) {
    blockArr[i].removeClass('future');
    blockArr[i].addClass('past');
  }

  else if (currentHour === timeArr[i]) {
    blockArr[i].removeClass('future');
    blockArr[i].addClass('present');
  }
}

//event listener for the save button to add the text in the block to local storage
// saveButton.addEventListener("click", saveText())

function saveText () {
  var test = "test"
  localStorage.setItem("test", JSON.stringify(test))
}