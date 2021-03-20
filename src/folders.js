
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

//Creating default Folders
const Home = TaskFolder("Home");
const Today = TaskFolder("Today");
const Upcoming = TaskFolder("Upcoming");
const Completed = TaskFolder("Completed");

export {TaskFolder, Home, Today, Upcoming, Completed}