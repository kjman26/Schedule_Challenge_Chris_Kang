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
function fnsubmit(){
  this.querySelectorAll("[type=hidden]").value= JSON.stringify(clickedlinks);
  console.log(JSON.parse(this.querySelector("input[type=hidden]").value)[0]);
  event.preventDefault();//return true;
}