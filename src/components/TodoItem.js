import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.todoContext.deleteTodo(this.props.todo)

    this.props.updateTodoList()
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      <h3>${this.props.todo.title}</h3>
      <button class="complete-toggle-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    `

    const deleteBtn = todoElement.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.handleDelete);

    return todoElement;
  }
}
