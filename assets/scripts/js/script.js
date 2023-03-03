// 1. Show the current date at the top
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(todayDate); // Add it to the `currentDay` element

// 2. Colour code each block based on the current time
//    Create variables to target each time block

// SaveBtn event click listener  - set two variables: one for time and one for description
$(".saveBtn").click(function () {
  var time = $(this).parent().attr("id"); // use this(selector) to call the parent object and attribute of relevant hour id
  var description = $(this).siblings(".description").val(); //calls the sibling of the parent object and as its an input text the val is set to ().

  // use localStorage.setItem(values to be saved) to save into local storage
  localStorage.setItem(time, description);
});

// In the html add the data-hour which represent which hour each element is
// Create variable for moment().hour()
function time() {
  var timeNow = moment().hour();

  //Loop over time-blocks

  // use the for each jquery function and use "time-block" as the target ID
  $(".time-block").each(function () {
    // takes the full string attrbuted to hour ID thats been inputted and saved (Hour, description) and splits it and takes the first element from the array (hour)
    var timeblock = parseInt($(this).attr("id").split("hour")[0]);

    if (timeblock < timeNow) {
      //if current time is past the time block then time block is in the past (gray)
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (timeblock === timeNow) {
      //timeblock matches current time then in the present (red)
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("past"); // if current time hasn't reached the time block then the time block is in the future (green)
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// 3. Save input to local storage

// $(ID for each hour and description).val(localStorage.getItem(keyname) - for each hour block

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

time();
//