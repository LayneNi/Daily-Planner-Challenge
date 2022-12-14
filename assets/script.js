// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // the below code makes the inputed text save in local storage and on the page when the save button is selected
  var saveBtnEl = $(".saveBtn");
  console.log(saveBtnEl);

  saveBtnEl.on("click", function (event) {
    console.log($(event.target).parent().children().eq(0).attr("data-hourValue"));
    var userInput = $(event.target).parent().children().eq(1).val();
    var activityHour = $(event.target).parent().children().eq(0).attr("data-hourValue");
    localStorage.setItem(activityHour, userInput);
    saveInput()
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // this uses dayjs to get the current hour
  dayjs().hour()
  newDate = dayjs().hour()
  console.log(newDate);

  var planHours = $(".hour");
  var plan = $(".description");

  for (var i = 0; i < planHours.length; i++) {
    var someHour = planHours[i];
    var planHourValue = parseInt($(someHour).attr("data-hourValue"))
    if (planHourValue < newDate) {
      $(plan[i]).addClass("past");
    } else if (planHourValue > newDate) {
      $(plan[i]).addClass("future");
    } else
      $((plan[i])).addClass("present");
  }

  // TODO: Add code to display the current date in the header of the page.

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var descriptionEl = $(".description");
  console.log(descriptionEl);

  for (var i = 9; i < 17; i++) {
    console.log(localStorage.getItem([i]));
    var plan = localStorage.getItem([i]);

    if (plan !== null) {
      descriptionEl[i - 9].value = plan;
    }
  }
});