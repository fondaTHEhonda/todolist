import {Task, TaskFolder} from "./app"
import {newTaskForm, newFolderForm} from "./forms"
import {sidebarLayout} from "./sidebarLayout"
import {openNewTaskForm, closeNewTaskForm, openNewFolder, closeNewFolder} from "./eventlisteners"

let testTask = Task('Test', "This is a test", "01/01/2022", "high", "");

const newFolder = TaskFolder("Test Folder");
console.log(testTask.folder);
testTask.folder = "Hey";

console.log(testTask.getTitle());
console.log(testTask.getDesc());
console.log(testTask.getDueDate());
console.log(testTask.getPriority());
console.log(testTask.folder);
console.log(newFolder.folder);
console.log(newFolder.getTitle());

window.addEventListener('click', openNewTaskForm);
window.addEventListener('click', closeNewTaskForm);
window.addEventListener('click', openNewFolder);
window.addEventListener('click', closeNewFolder);
