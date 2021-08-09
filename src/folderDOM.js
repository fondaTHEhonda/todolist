import Folder from "./folder"

let folderList = []

const folderForm = document.querySelector('#folder-form')
const createFormBtn = document.querySelector('#submit-folder')

//Shows and hides display form
const displayFolderForm = () => {
    const showForm = document.querySelector('#create-folder')
    showForm.addEventListener( 'click', () => folderForm.style.visibility = 'visible')
}

const hideFolderForm = () => {
    const hideForm = document.querySelector('#cancel-folder')
    hideForm.addEventListener('click', () => folderForm.style.visibility = 'hidden')
}

//Creating a new folder
const folderFormSubmission = (event) => {
    event.preventDefault()
    let folderTitle = document.querySelector('#folder-title')

    let newFolder = new Folder(folderTitle.value)
    folderList.push(newFolder)
    folderDisplay()
    folderForm.style.visibility = 'hidden'
    console.log(folderList)
}

createFormBtn.addEventListener('click', folderFormSubmission)

function folderDisplay() {
    document.querySelector('#sidebar-container').innerHTML = ''
    folderList.forEach(index => {
        const sidebarTitle = document.createElement('li')
        sidebarTitle.innerHTML = index.title
        document.querySelector('#sidebar-container').appendChild(sidebarTitle)
    })
}

export { displayFolderForm, hideFolderForm, createFormBtn }