import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"

    this.props.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext,
        updateTodoList: this.props.updateTodoList
      })

      todoListElement.appendChild(todoItem.render())
    });

    return todoListElement;
  }
}
