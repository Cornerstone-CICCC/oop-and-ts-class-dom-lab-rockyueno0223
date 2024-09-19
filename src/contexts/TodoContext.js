export class TodoContext {
  constructor() {
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push({ ...todo, completed: false })
  }

  getTodos() {
    return this.todos
  }

  toggleComplete(todo) {
    const targetTodo = this.todos.find(t => t === todo)
    if (targetTodo) {
      targetTodo.completed = !targetTodo.completed
    }
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }
}
