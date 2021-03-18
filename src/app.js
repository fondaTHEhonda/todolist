//Constructor for creating individual tasks. 
const Task = (title, desc, dueDate, priority, folder, complete = false) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {getTitle, getDesc, getDueDate, getPriority, folder, complete}
}

//Constructor for creating new folders to organize tasks.
const TaskFolder = (title) => {
    const getTitle = () => title;

    return {getTitle}
}

export {Task, TaskFolder}