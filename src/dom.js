//module for all dom related tasks

import {Project} from './project.js';
import {Task} from './task.js';


const dom = (() => {

    let projects = [new Project('project1')];
    let activeProject = 'project1';

    const showProjectForm = () => {
        const form = document.getElementById('project-form');
        form.style.display = "block";
    }

    const hideProjectForm = () => {
        const form = document.getElementById('project-form');
        form.style.display = "none";
        console.log('hide form');
    }

    const showTodoForm = () => {
        const form = document.getElementById('todo-form');
        form.style.display = "block";
    }

    const hideTodoForm = () => {
        const form = document.getElementById('todo-form');
        form.style.display = "none";
    }

    //switch projects on click
    const projectClicked = () => {
        const projectList = document.getElementById("project-list");
        projectList.addEventListener("click", (e) => {
            hideShowProject(e.target.innerText);
        })
    }

    //create todo list for new projects
    const createProject = (projectName) => {

        //make todo list for new project
        let projectList = document.getElementById("project-list");
        const lists = document.getElementById('project-todoLists');

        //create list item to display project to dom
        let li = document.createElement("li"); 
        let ul = document.createElement("ul"); //list of all project-related todos

        li.innerText = projectName;
        ul.id = projectName; 
        console.log('created project', ul);

        projects.push(new Project(projectName));
        console.log(projects);
        
        projectList.appendChild(li); 
        lists.appendChild(ul);

        deleteTask(ul); 
    }

    //create new task & put it into the respective project list
    const createTask = (task, projectName) => {

        //get project todo list
        const ul = document.getElementById(projectName);

        //create list items
        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");
        const button = document.createElement("button");

        label.innerText = task;
        input.type="checkbox";
        button.className = "delete";
        button.innerText = "delete";

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);
        ul.appendChild(li);
    }

    const deleteTask = (projectList) => {
        console.log('project list', projectList);
        projectList.addEventListener('click', (e) => {
            console.log(e.target);
            if(e.target.className == 'delete'){
                //console.log('del button');
                //console.log(e.target.parentNode);
                e.target.parentNode.remove();
            }
        })
    }

    //display clicked project & related tasks
    const hideShowProject = (projectName) => {
        //console.log(projectName);
        let title = document.getElementById('project-title');
        const x = document.getElementById('x');
        projects.forEach(project => {
            //console.log(typeof project.getName());
            const list = document.getElementById(project.getName());
            //console.log('current project', list)
            if(!(project.getName()==projectName)){
                console.log('hiding', project)

                //get todolist & hide it
                list.style.display = "none";
                //console.log(list);
            }
            else{
                list.style.display = "block";
                title.innerText = projectName;
                activeProject = projectName;
            }
        });
    }

    const setCurrentProject = (projectName) => {
        activeProject = projectName;
    }

    const getCurrentProject = () => {
        return activeProject;
    }

    return {showProjectForm, hideProjectForm, showTodoForm, hideTodoForm, createProject, 
        createTask, getCurrentProject, deleteTask, projectClicked};

})();

export {dom};