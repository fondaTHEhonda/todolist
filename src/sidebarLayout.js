//Creating the layout for the sidebar. Contains categories and Projects.
const sidebarLayout = (() => {
    //Default Content
    const currentTaskContainer = document.createElement('div');
    currentTaskContainer.id = "current-task-container";
    const categoryList = document.createElement('ul');
    categoryList.id = "category-list";

    const home = document.createElement('ul');
    home.id = "home-category";
    home.classList.add("category-header");
    home.textContent = "Home";

    const today = document.createElement('li');
    today.id = "today-category";
    today.classList.add('category-option');
    today.textContent = "Today";

    const upcoming = document.createElement('li');
    upcoming.id = "upcoming-category";
    upcoming.classList.add('category-option');
    upcoming.textContent = "Upcoming";

    const completed = document.createElement('li');
    completed.id = "completed-category";
    completed.classList.add('category-option');
    completed.textContent = "Completed";

    const projects = document.createElement('li');
    projects.id = "project-list";
    projects.classList.add("category-header");
    projects.textContent = "Projects";

    const projectsList = document.createElement('ul');
    projectsList.id = "project-list-options";

    const newProjectBtn = document.createElement('button');
    newProjectBtn.id = "new-project-btn";
    newProjectBtn.textContent = "New Project";

    //Sets default content of sidebar.
    function setDefaultContent() {

        categoryList.appendChild(home);
        categoryList.appendChild(today);
        categoryList.appendChild(upcoming);
        categoryList.appendChild(completed);
        projects.appendChild(projectsList);
        categoryList.appendChild(projects);
        categoryList.appendChild(newProjectBtn);
        currentTaskContainer.appendChild(categoryList);
        document.getElementById('sidebar-container').appendChild(currentTaskContainer);
    }

    //Helper function to add list of tasks to appropriate folder
    function appendTasks (folder) {
        
        folder.map(function(item) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            home.appendChild(li);
    })
    
}

    
    return {setDefaultContent, appendTasks}
})();



export {sidebarLayout}