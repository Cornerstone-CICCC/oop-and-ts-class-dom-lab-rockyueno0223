import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleToggleComplete() {
    this.props.todoContext.toggleComplete(this.props.todo)

    this.props.updateTodoList()
  }

  handleDelete() {
    this.props.todoContext.deleteTodo(this.props.todo)

    this.props.updateTodoList()
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      <h3
        class="${this.props.todo.completed ? 'complete' : ''}"
      >
        ${this.props.todo.title}
      </h3>
      <div class="todo-btn-wrapper">
        <button class="complete-toggle-btn">
          ${this.props.todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button class="delete-btn">Delete</button>
      </div>
    `

    const completeBtn = todoElement.querySelector('.complete-toggle-btn');
    const deleteBtn = todoElement.querySelector('.delete-btn');

    completeBtn.addEventListener('click', this.handleToggleComplete);
    deleteBtn.addEventListener('click', this.handleDelete);

    return todoElement;
  }
}
