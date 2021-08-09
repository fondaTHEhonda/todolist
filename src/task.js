class Task {
    constructor(title, description, dueDate, priority, complete = false) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
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