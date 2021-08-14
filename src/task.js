import { generateID } from "./helpers"

class Task {
    constructor(title, description, dueDate, priority, id, complete = false) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
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