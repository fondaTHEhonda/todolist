class Folder {
    constructor(title, tasks) {
        this.title = title,
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)
    }
}

export default Folder