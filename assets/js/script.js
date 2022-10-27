// Create UI Hooks
var currentDayEl = $('#currentDay')
var calendarEl = $('.container');
// Create State Variables
var currentTime = moment();
var currentDay = currentTime.format('dddd, MMMM Do')
console.log(currentTime)
console.log(currentDay)
// Set Current Day to top
currentDayEl.text(currentDay)
// Set Each time block to past, present, and future

// Allow users to create events in persistent storage