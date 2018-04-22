"use strict";

function closeOverlay(){
  var closeButtons = document.getElementsByClassName("close");
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].click();
  }
}

function createTask(){
  var taskTable = document.getElementsByTagName("table").namedItem("taskList");
  var taskName = document.getElementsByClassName("taskName")[0].value;
  if (taskName.length < 1){
    taskName = "placeholder";
  }
  var taskTime = document.getElementsByClassName("taskTime");
  var timeStr = "";
  if (taskTime[0].value.length > 0){
    timeStr += taskTime[0].value + " hours ";
  }
  if (taskTime[1].value.length > 0){
    timeStr += taskTime[1].value + " minutes ";
  }
  if (timeStr.length < 1){
    timeStr = "30 minutes (default)";
  }
  
  var newTask = $(taskTable.getElementsByTagName("tr")[0]).clone();
  var a = newTask[0].getElementsByTagName("a")[0];
  a.href = "#" + taskName;
  var button = newTask[0].getElementsByTagName("button")[0];
  button.id = "task" + taskName;
  button.innerText = taskName;
  newTask.appendTo(taskTable);
  createTaskDiv(taskName, timeStr);
}

function createTaskDiv(taskName, timeStr){
  var taskListDiv = document.getElementById("taskList");
  var newTask = $("#exist").clone();
  var div = newTask[0];
  div.id = taskName;
  var header = div.getElementsByTagName("h1")[0];
  header.innerText = taskName;
  var content = div.getElementsByClassName("content")[0];
  content.getElementsByTagName("p")["0"].innerText = "You set " + taskName + " for " + timeStr;
  taskListDiv.appendChild(div);
  quitButtons();
}

function quitButtons() {
  var cancelButtons = document.getElementsByClassName("animated fadeInDown confirm2");
  for(var i = 0; i < cancelButtons.length; i++){
    cancelButtons[i].onclick = closeOverlay;
  }
}

window.onload = quitButtons;


