import { generateID } from "./helpers"

class Folder {
    constructor(title, id, tasks) {
        this.title = title,
        this.id = generateID(),
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)
    }
}

export default Folder