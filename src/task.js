//Constructor for creating individual tasks. 
const Task = (title, desc, dueDate, priority, complete = false) => {


    return {title, desc, dueDate, priority, complete}
}

export {Task}