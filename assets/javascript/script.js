//function to allow users to save text in local storage and keep it upon a refresh
$(function () {
  $('.saveBtn').on('click', function (){
    var description = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, description)
  })
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
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