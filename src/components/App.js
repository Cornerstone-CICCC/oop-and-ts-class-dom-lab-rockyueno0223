import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";

export class App extends Component {
  constructor(props) {
    super(props)
    this.todoContext = props.todoContext
    this.updateTodoList = this.updateTodoList.bind(this)
    this.container = null
  }

  updateTodoList() {
    const todosContainer = this.container.querySelector('#wrapper-todos');
    todosContainer.innerHTML = '';

    const todos = new TodoList({
      todoContext: this.todoContext,
      todos: this.todoContext.getTodos(),
      updateTodoList: this.updateTodoList
    }).render();

    todosContainer.appendChild(todos);
  }

  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `

    this.container = container

    const add = new AddTodo({
      todoContext: this.todoContext,
      updateTodoList: this.updateTodoList
    }).render()

    const todos = new TodoList({
      todoContext: this.todoContext,
      todos: this.todoContext.getTodos(),
      updateTodoList: this.updateTodoList
    }).render()

    container.querySelector('#wrapper-add').appendChild(add)
    container.querySelector('#wrapper-todos').appendChild(todos)

    return container;
  }
}
