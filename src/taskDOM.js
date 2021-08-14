import Task from "./task"
import { folderList } from './folderDOM'

const taskForm = document.querySelector('#task-form')
const createTaskBtn = document.querySelector('#submit-task')

const displayTaskForm = () => {
    const displayForm = document.querySelector('#create-task')
    displayForm.addEventListener( 'click', () => taskForm.style.visibility = 'visible')
}

const hideTaskForm = () => {
    const cancelForm = document.querySelector('#cancel-task')
    cancelForm.addEventListener('click', () => taskForm.style.visibility = 'hidden')
}

const taskFormSubmission = (event) => {
    event.preventDefault()
    let taskTitle = document.querySelector('#task-title').value
    let taskDescription = document.querySelector('#task-description').value
    let taskDueDate = document.querySelector('#task-due-date').value
    let taskHighPriority = document.querySelector('#task-priority-high')
    let taskLowPriority = document.querySelector('#task-priority-low')
    let taskPriority

    if(taskHighPriority.checked) {
        taskPriority = 'high'
    } else if(taskLowPriority.checked) {
        taskPriority = 'low'
    }

    let newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority)
    console.log(newTask)
    taskTitle = ''
    taskDescription = ''
    taskDueDate = ''
    taskHighPriority = ''
    taskLowPriority = ''
    taskForm.style.visibility = 'hidden'
}

createTaskBtn.addEventListener('click', taskFormSubmission)

export { displayTaskForm, hideTaskForm, createTaskBtn }