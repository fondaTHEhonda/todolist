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