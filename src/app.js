//Constructor for creating individual tasks. 
const Task = (title, desc, dueDate, priority, complete = false) => {


    return {title, desc, dueDate, priority, complete}
}

//Constructor for creating new folders to organize tasks.
const TaskFolder = (title) => {
    let list = [];

    //Retrieve Info
    const getTitle = () => title;
    const getList = () => list;

    //Change List    
    const addToList = (task) => {
        list.push(task.title);
    }
    const removeFromList = (task) => list.splice(list.indexOf(task.title), 1);

    return {getTitle, getList, addToList, removeFromList, list}
}


export {Task, TaskFolder}