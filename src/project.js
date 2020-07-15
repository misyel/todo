class Project{

    constructor(name, todos){
        this.name = name;
        this.todos = [];
    }

    getName(){
        return this.name;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(task){
        this.todos.push(task);
    }

    removeTodo(index){
        this.todos.splice(index,1)
    }

}

export {Project}