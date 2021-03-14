//Form to add new task.
const newTaskForm = (() => {
    const formContainer = document.createElement('div');
    formContainer.id = "form-container";
    const taskForm = document.createElement('form');
    taskForm.id = "new-task-form";

    let taskTitle = document.createElement('input');
    taskTitle.type = "text";
    taskTitle.placeholder = "New Task";
    taskTitle.classList.add("form-content");
    taskForm.appendChild(taskTitle);

    let taskDesc = document.createElement('input');
    taskDesc.type = "text";
    taskDesc.placeholder = "Description";
    taskDesc.classList.add('form-content');
    taskForm.appendChild(taskDesc);

    let taskDueDate = document.createElement("input");
    taskDueDate.type = "date";
    taskDueDate.classList.add("form-content");
    taskForm.appendChild(taskDueDate);

    let taskPriority = document.createElement('select');
    taskPriority.name = "priority";
    taskPriority.id = "priority-select";
    taskPriority.classList.add('form-content');

    let highPriority = document.createElement("option");
    highPriority.value = "high";
    highPriority.textContent = "High";
    taskPriority.appendChild(highPriority);

    let mediumPriority = document.createElement('option');
    mediumPriority.value = "medium";
    mediumPriority.textContent = "Medium";
    taskPriority.appendChild(mediumPriority);

    let lowPriority = document.createElement("option");
    lowPriority.value = "low";
    lowPriority.textContent = "Low";
    taskPriority.appendChild(lowPriority);

    taskForm.appendChild(taskPriority);

    let selectFolder = document.createElement('select');
    selectFolder.name = "folder";
    selectFolder.id = "folder-select";
    selectFolder.classList.add('form-content');

    let testOption = document.createElement("option");
    testOption.value = "test";
    testOption.textContent = "Test";
    selectFolder.appendChild(testOption);

    taskForm.appendChild(selectFolder);


    let taskSubmitBtn = document.createElement("button");
    taskSubmitBtn.type = "submit";
    taskSubmitBtn.classList.add('form-content');
    taskSubmitBtn.id = "form-submit-btn";
    taskSubmitBtn.textContent = "Submit";
    taskForm.appendChild(taskSubmitBtn);

    formContainer.appendChild(taskForm);

    return document.getElementById("page-container").appendChild(formContainer);
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
    folderSubmitBtn.textContent = "Submit";
    folderForm.appendChild(folderSubmitBtn);

    newFolderContainer.appendChild(folderForm);

    return document.getElementById("page-container").appendChild(newFolderContainer);
})();

export {newTaskForm, newFolderForm}