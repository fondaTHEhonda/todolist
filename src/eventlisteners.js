import {Task, TaskFolder} from "./app"
import {newTaskForm, newFolderForm} from "./forms"
import {sidebarLayout} from "./sidebarLayout"


//This doesn't work as intended. Will have to revise and rethink how to approach opening forms. 
const openNewTaskForm = function (e) {
    if(e.target.id === "create-new-task") {
        document.getElementById('new-task-form').style.display = "block";
    }
}

export {openNewTaskForm}