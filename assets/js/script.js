// Create UI Hooks
var currentDayEl = $('#currentDay')
var calendarTable = $('#tbody');

// Create State Variables
var currentTime = moment().startOf('hour');
var currentDay = currentTime.format('dddd, MMMM Do')
var calendarEvents = [];

// Set Current Day to top
currentDayEl.text(currentDay)

// Set Each time block to past, present, and future
var dayString = currentTime.format('YYYY-MM-DD')
for (let i = 0; i < 9; i++) {
  var calHour = moment(dayString + " " + calendarTable.children().eq(i).data("time"));
  if (moment(calHour).isBefore(currentTime)) {
    //make red
    calendarTable.children().eq(i).children().eq(1).css("background-color", "red");
    calendarTable.children().eq(i).children().eq(1).children().css("background-color", "red")
  } else if (moment(calHour).isSame(currentTime)) {
    //keep gray
  } else {
    //make green
    calendarTable.children().eq(i).children().eq(1).css("background-color", "green");
    calendarTable.children().eq(i).children().eq(1).children().css("background-color", "green")
  }
}
// Allow users to create events in persistent storage
calendarTable.click(function(event) {
  var buttonEl = event.target
  if (buttonEl.matches("button")) {
    var hourEl = buttonEl.parentElement.previousElementSibling.children[0]
    var whichHour = hourEl.dataset.time
    var eventText = hourEl.value
    event = {
      whichHour: hourEl.dataset.time,
      eventText: hourEl.value
    }
  }
})

// console.log(calendarTable.children().eq(i).children().eq(1)) select text content