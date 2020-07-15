class Task{

    constructor(task){
        this.task = task;
    }

    setTask(newTask){
        this.task = newTask;
    }
    getTask(){
        return this.task;
    }
}

export{Task};