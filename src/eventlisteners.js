import {Task, TaskFolder} from "./app"
import {newTaskForm, newFolderForm} from "./forms"
import {sidebarLayout} from "./sidebarLayout"


//This doesn't work as intended. Will have to revise and rethink how to approach opening forms. 
const openNewTaskForm = function (e) {
    if(e.target.id === "create-new-task") {
        document.getElementById('form-container').style.display = "block";
    }
}

const closeNewTaskForm = function(e) {
    if(e.target.id === "form-cancel-btn") {
        document.getElementById('form-container').style.display = "none";
    }
}

const openNewFolder = function(e) {
    if(e.target.id === "new-project-btn") {
        document.getElementById('folder-form-container').style.display = "block";
    }
}

const closeNewFolder = function(e) {
    if(e.target.id === "folder-cancel-btn") {
        document.getElementById('folder-form-container').style.display = "none";
    }
}

export {openNewTaskForm, closeNewTaskForm, openNewFolder, closeNewFolder}