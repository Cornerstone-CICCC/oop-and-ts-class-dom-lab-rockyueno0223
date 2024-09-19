import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo() {
    const todoInput = document.querySelector('#todo-input').value;
    if (todoInput.trim() !== '') {
      this.props.todoContext.addTodo({ title: todoInput });
      document.querySelector('#todo-input').value = '';
      this.props.updateTodoList();
    }
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    const addBtn = addElement.querySelector('#todo-add-btn');
    addBtn.addEventListener('click', this.handleAddTodo);

    this.element = addElement
    return addElement;
  }
}
