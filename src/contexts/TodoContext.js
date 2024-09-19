export class TodoContext {
  constructor() {
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  getTodos() {
    return this.todos
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }
}
