//Creating the layout for the sidebar. Contains categories and Projects.
const sidebarLayout = (() => {
    const currentTaskContainer = document.createElement('div');
    currentTaskContainer.id = "current-task-container";
    const categoryList = document.createElement('ul');
    categoryList.id = "category-list";

    const home = document.createElement('li');
    home.id = "home-category";
    home.classList.add("category-header");
    home.textContent = "Home";
    categoryList.appendChild(home);
    

    const today = document.createElement('li');
    today.id = "today-category";
    today.classList.add('category-option');
    today.textContent = "Today";
    categoryList.appendChild(today);

    const upcoming = document.createElement('li');
    upcoming.id = "upcoming-category";
    upcoming.classList.add('category-option');
    upcoming.textContent = "Upcoming";
    categoryList.appendChild(upcoming);
    
    const projects = document.createElement('li');
    projects.id = "project-list";
    projects.classList.add("category-header");
    projects.textContent = "Projects";

    const projectsList = document.createElement('ul');
    projectsList.id = "project-list-options";
    projects.appendChild(projectsList);

    categoryList.appendChild(projects);

    currentTaskContainer.appendChild(categoryList);

    return document.getElementById('sidebar-container').appendChild(currentTaskContainer);
})();


export {sidebarLayout}