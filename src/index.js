import {Task} from "./task"
import {TaskFolder, Home, Today, Upcoming, Completed} from "./folders"
import {newTaskForm, newFolderForm} from "./forms"
import {sidebarLayout} from "./sidebarLayout"
import {openNewTaskForm, closeNewTaskForm, openNewFolder, closeNewFolder} from "./eventlisteners"
//import {submitNewTask} from "./formSubmission"

let testTask = Task('Test', "This is a test", "01/01/2022", "High");
let newerTask = Task("Tester", "This is another test", "01/01/2022", "Low")
let tester = Task("Beta", "Beta Test", "1/1/2021", "Low",)
let a = Task("Alpha", "Beta Test", "1/1/2021", "Low",)
let b = Task("Gamma", "Beta Test", "1/1/2021", "Low",)
let c = Task("Delta", "Beta Test", "1/1/2021", "Low",)
let d = Task("Iota", "Beta Test", "1/1/2021", "Low",)
let e = Task("Epsilon", "Beta Test", "1/1/2021", "Low",)

newTaskForm.createForm();
sidebarLayout.setDefaultContent();

window.addEventListener('click', openNewTaskForm);
window.addEventListener('click', closeNewTaskForm);
window.addEventListener('click', openNewFolder);
window.addEventListener('click', closeNewFolder);
window.addEventListener('click', newTaskForm.submitNewTask);
