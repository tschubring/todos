// src/containers/AddTodo.js

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let textField;
  let numField;

  return (
    <div className="itemHolder">
      <form onSubmit={e => {
        e.preventDefault()
        if (!textField.value.trim()) {
          return
        }
        dispatch(addTodo(textField.value, Number(numField.value)))
        textField.value = ''
      }}>
        Label:<br /><input ref={node => textField = node} />
        <br />Minutes:<br /><input type="number" defaultValue="1" ref={node => numField = node} />
        <br /><button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
