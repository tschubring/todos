// src/components/todoList.js
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, upButton, downButton, xButton }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        text={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        upButton={() => upButton(todo.id)}
        downButton={() => downButton(todo.id)}
        xButton={() => xButton(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  upButton: PropTypes.func.isRequired,
  downButton: PropTypes.func.isRequired,
  xButton: PropTypes.func.isRequired
}

export default TodoList
