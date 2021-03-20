import {Task, TaskFolder} from "./app"
import {setPriority} from "./formSubmission"

//Form to add new task.
const newTaskForm = (() => {
    //Setting main variables to call on when creating new task. IIFE
    const formContainer = document.createElement('div');
        formContainer.id = "form-container";
        const taskForm = document.createElement('form');
        taskForm.id = "new-task-form";

        const taskTitle = document.createElement('input');
        taskTitle.type = "text";
        taskTitle.placeholder = "New Task";
        taskTitle.classList.add("form-content");

        const taskDesc = document.createElement('input');
        taskDesc.type = "text";
        taskDesc.placeholder = "Description";
        taskDesc.classList.add('form-content');

        const taskDueDate = document.createElement("input");
        taskDueDate.type = "date";
        taskDueDate.classList.add("form-content");

        const taskPriority = document.createElement('select');
        taskPriority.name = "priority";
        taskPriority.id = "priority-select";
        taskPriority.classList.add('form-content');

        const highPriority = document.createElement("option");
        highPriority.value = "high";
        highPriority.textContent = "High";

        const mediumPriority = document.createElement('option');
        mediumPriority.value = "medium";
        mediumPriority.textContent = "Medium";

        const lowPriority = document.createElement("option");
        lowPriority.value = "low";
        lowPriority.textContent = "Low";

        const selectFolder = document.createElement('select');
        selectFolder.name = "folder";
        selectFolder.classList.add('form-content');
        selectFolder.id = "folder-select";

        const testOption = document.createElement("option");
        testOption.value = "test";
        testOption.textContent = "Test";

        const taskSubmitBtn = document.createElement("button");
        taskSubmitBtn.type = "submit";
        taskSubmitBtn.classList.add('form-content');
        taskSubmitBtn.id = "form-submit-btn";
        taskSubmitBtn.textContent = "Submit";

        const taskCancelBtn = document.createElement('button');
        taskCancelBtn.type = "button";
        taskCancelBtn.classList.add('form-content');
        taskCancelBtn.id = "form-cancel-btn";
        taskCancelBtn.textContent = "Cancel";

    //Appends elements together. Called as soon as page loads. Default is hidden.
    function createForm() {
        taskForm.appendChild(taskTitle);
        taskForm.appendChild(taskDesc);
        taskForm.appendChild(taskDueDate);
        taskPriority.appendChild(highPriority);
        taskPriority.appendChild(mediumPriority);
        taskPriority.appendChild(lowPriority);
        taskForm.appendChild(taskPriority);
        selectFolder.appendChild(testOption);
        taskForm.appendChild(selectFolder);
        taskForm.appendChild(taskSubmitBtn);
        taskForm.appendChild(taskCancelBtn);
        formContainer.appendChild(taskForm);

        document.getElementById("page-container").appendChild(formContainer)
    }
    //Helper function. Sets priority of task based on selected index of form.
    const setPriority = (select) => {
        if(select.selectedIndex = "0") {
            return "High";
        } else if(select.selectedIndex = "1") {
            return "Medium";
        } else {
            return "Low";
        }
    }

    //Function for submit button event listener. Creates new task on submission.
    function submitNewTask(e) {
        e.preventDefault();
        let newTask;

        if(e.target.id === "form-submit-btn") {
            newTask = Task(taskTitle.value, taskDesc.value, taskDueDate.value, setPriority(taskPriority));
            console.log(newTask.title);
            console.log(newTask.desc);
            console.log(newTask.dueDate);
            console.log(newTask.priority);
            document.getElementById('form-container').style.display = "none";
        }
        
    }

    return {submitNewTask, createForm}
})();

const newFolderForm = (() => {
    const newFolderContainer = document.createElement('div');
    newFolderContainer.id = "folder-form-container";
    const folderForm = document.createElement('form');
    folderForm.id = "folder-form";

    const folderTitle = document.createElement('input');
    folderTitle.type = "text";
    folderTitle.placeholder = "New Folder";
    folderTitle.classList.add('folder-form-content');
    folderForm.appendChild(folderTitle);

    const folderSubmitBtn = document.createElement('button');
    folderSubmitBtn.type = "submit";
    folderSubmitBtn.id = "folder-submit-btn";
    folderSubmitBtn.textContent = "Submit";
    folderForm.appendChild(folderSubmitBtn);

    const folderCancelBtn = document.createElement('button');
    folderCancelBtn.type = "button";
    folderCancelBtn.classList.add('folder-form-content');
    folderCancelBtn.id = "folder-cancel-btn";
    folderCancelBtn.textContent = "Cancel";
    folderForm.appendChild(folderCancelBtn);

    newFolderContainer.appendChild(folderForm);

    return document.getElementById("page-container").appendChild(newFolderContainer);
})();

export {newTaskForm, newFolderForm}