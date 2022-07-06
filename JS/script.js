function refreshTime(){
  const timeDisplay = document.getElementById("currentDay");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(",","-");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

var hour = document.querySelectorAll(".list-group-item")
var currentHour = moment().hour();

console.log(currentHour)

//   $("group-list-item").each(function()) {
//     var timeDisplay = $(this).attr("id")
//     if (currentHour > hour) {
//       $(this).addClass("past")
// //     }
//     else if (currentHour == hour) {
//       $(this).addClass("present")
//     }
//     else (currentHour < hour) {
//       $(this).addClass("future")
//     }
//   };

// var save = document.querySelectorAll()
