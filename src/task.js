import { generateID } from "./helpers"

class Task {
    constructor(title, description, dueDate, priority, folderID, id, complete = false) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.folderID = folderID,
        this.id = generateID(),
        complete
    }

    changeComplete() {
        this.complete = !this.complete
    }
    
    changePriority() {
        if(this.priority === 'low') {
            this.priority = 'high'
        } else if(this.priority === 'high') {
            this.priority = 'low'
        }
    }
}

export default Task