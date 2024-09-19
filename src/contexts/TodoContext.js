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
}
