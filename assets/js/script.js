// Create UI Hooks
var currentDayEl = $('#currentDay')
var calendarTable = $('#tbody');
var inputFieldsEl = $('.input-field')
console.log(inputFieldsEl)

// Create State Variables
var currentTime = moment().startOf('hour'); // Sets time to the start of the hour
var currentDay = currentTime.format('dddd, MMMM Do') //Formats the day
var calendarEvents = [
  {
    whichHour: "09",
    eventText: ""
  },
  {
    whichHour: "10",
    eventText: ""
  },
  {
    whichHour: "11",
    eventText: ""
  },
  {
    whichHour: "12",
    eventText: ""
  },
  {
    whichHour: "13",
    eventText: ""
  },
  {
    whichHour: "14",
    eventText: ""
  },
  {
    whichHour: "15",
    eventText: ""
  },
  {
    whichHour: "16",
    eventText: ""
  },
  {
    whichHour: "17",
    eventText: ""
  },
];
if (JSON.parse(localStorage.getItem("calendarEvents")) !== null) {
  calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
  for (let i = 0; i < inputFieldsEl.length; i++) {
    inputFieldsEl[i].value = calendarEvents[i].eventText
  }
}
// Set Current Day to top
currentDayEl.text(currentDay)

// Set Each time block to past, present, and future
var dayString = currentTime.format('YYYY-MM-DD')
for (let i = 0; i < 9; i++) {
  var calHour = moment(dayString + " " + calendarTable.children().eq(i).data("time")); //creates new moment for the start of each hour
  if (moment(calHour).isBefore(currentTime)) {
    //make gray
    calendarTable.children().eq(i).children().eq(1).css("background-color", "gray");
    calendarTable.children().eq(i).children().eq(1).children().css("background-color", "gray")
  } else if (moment(calHour).isSame(currentTime)) {
    //keep red
    calendarTable.children().eq(i).children().eq(1).css("background-color", "red");
    calendarTable.children().eq(i).children().eq(1).children().css("background-color", "red")
  } else {
    //make green
    calendarTable.children().eq(i).children().eq(1).css("background-color", "green");
    calendarTable.children().eq(i).children().eq(1).children().css("background-color", "green")
  }
}
// Allow users to create events in persistent storage
calendarTable.click(function (event) {
  var clickedEl = event.target
  if (clickedEl.matches("button")) {
    var hourEl = clickedEl.parentElement.previousElementSibling.children[0] //traverses DOM to nearest input
    var whichHour = hourEl.dataset.time // gets time of input field
    for (let i = 0; i < calendarEvents.length; i++) {
      if (calendarEvents[i].whichHour == whichHour) {
        calendarEvents[i].eventText = hourEl.value;
        localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
      }
    }
  }
})