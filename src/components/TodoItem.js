import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      <h3>${this.props.todo.title}</h3>
      <button class="complete-toggle-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    `

    return todoElement;
  }
}
