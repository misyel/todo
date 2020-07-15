import {Project} from './project.js';
import {Task} from './task.js';
import {dom} from './dom.js'

console.log('hello');

//const dom = new Dom();
//let projects = [];
const addProject = document.getElementById('newProject');
const closeProjectForm = document.getElementById('project-cancel');
const submitProject = document.getElementById('project-submit');
const addTask = document.getElementById('newTodo');
const closeTodoForm = document.getElementById('task-cancel');
const submitTodoForm = document.getElementById('task-submit');



//show project & todo form on click
addProject.addEventListener("click", dom.showProjectForm);
closeProjectForm.addEventListener("click", dom.hideProjectForm);
addTask.addEventListener("click", dom.showTodoForm);
closeTodoForm.addEventListener('click', dom.hideTodoForm);

dom.projectClicked();

submitProject.addEventListener("click", function(){
    const projectTitle = document.getElementById('project-name').value;
    if(projectTitle){
        dom.hideProjectForm();
        dom.createProject(projectTitle);
    }
    else{
        alert('please enter a name');
    }
})

submitTodoForm.addEventListener("click", function(){
    const task = document.getElementById('task-input').value;
    console.log('task is', task);
    console.log('current project is', dom.getCurrentProject());
    if(task){
        dom.createTask(task, dom.getCurrentProject());
        dom.hideTodoForm();
    }
    else{
        alert('please enter a task');
    }
})



