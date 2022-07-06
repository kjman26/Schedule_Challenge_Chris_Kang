function refreshTime(){
  const timeDisplay = document.getElementById("currentDay");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(",","-");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

document.querySelectorAll("list-group-item") = function(){
  if("list-group-item < timeDisplay"){
    document.querySelector(".list-group-item").style.background = "red";
  }

};
