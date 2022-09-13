import React from "react"
import ToDoItem from "./ToDoItem";

class ToDosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    )
  }
}

export default ToDosList