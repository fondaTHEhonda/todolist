//Constructor for creating individual tasks. 
const Task = (title, desc, dueDate, priority) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {getTitle, getDesc, getDueDate, getPriority}
}

//Constructor for creating new folders to organize tasks.
const TaskFolder = (title) => {
    let folder = [];
    const getTitle = () => title;

    return {folder, getTitle}
}

export {Task, TaskFolder}