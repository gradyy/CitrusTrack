"use strict";

var defaultColor = "";
var taskList = {
  "Name":{
    "duration":"",
    "due_date":"",
    "color":""
  }

var taskElement = document.getElementById("listID");

function create_task(name, due_date){
  var task = {
    "duration": -1,
    "due_date": due_date,
    "color": defaultColor
    };
  taskList[name] = task;
  create_task_element(name, taskList[name]);
}

function create_task_element(name, task_JSON){
  var task = document.createElement('button');
  task.value = name;
  taskElement.appendChild(task);
}

function show_task(){
}

function delete_task(){

}

function delete_task_element(){

}
