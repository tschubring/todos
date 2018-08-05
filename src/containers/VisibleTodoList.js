// src/containers/VisibleTodoList.js

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { upButton } from '../actions'
import { downButton } from '../actions'
import { xButton } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  upButton: id => dispatch(upButton(id)),
  downButton: id => dispatch(downButton(id)),
  xButton: id => dispatch(xButton(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
