import Task from "./task"
import Folder from "./folder"
import { displayFolderForm, hideFolderForm, folderDisplay } from "./folderDOM"



const testTask = new Task('Test', 'This is a test', Date.now(), 'high')
console.log(testTask)
testTask.changeComplete()
testTask.changePriority()
console.log(testTask)

const testFolder = new Folder('Test Project')
console.log(testFolder)
testFolder.addTask(testTask)
console.log(testFolder)

displayFolderForm()
hideFolderForm()