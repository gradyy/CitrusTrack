"use strict";

var taskElement = document.getElementById("taskList");

function closeOverlay(){
  var closeButtons = document.getElementsByClassName("close");
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].click();
  }
}

function createTask(){
  var taskName = document.getElementById("newTaskName").value;

  var task = document.createElement('tr');
  task.value = name;
  taskElement.appendChild(task);
}

function show_task(){

}

function delete_task(){

}

function delete_task_element(){

}

window.onload = function() {
  var cancelButtons = document.getElementsByClassName("animated fadeInDown confirm2");
  for(var i = 0; i < cancelButtons.length; i++){
    cancelButtons[i].onclick = closeOverlay;
  }
}
