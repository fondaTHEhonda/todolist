import {Task, TaskFolder} from "./app"
import {newTaskForm, newFolderForm} from "./forms"
import {sidebarLayout} from "./sidebarLayout"
import {openNewTaskForm, closeNewTaskForm, openNewFolder, closeNewFolder} from "./eventlisteners"

let testTask = Task('Test', "This is a test", "01/01/2022", "high", "");
const newFolder = TaskFolder("Test Folder");

console.log(testTask);
newFolder.addTasks(testTask);
console.log(testTask.folder);



window.addEventListener('click', openNewTaskForm);
window.addEventListener('click', closeNewTaskForm);
window.addEventListener('click', openNewFolder);
window.addEventListener('click', closeNewFolder);
