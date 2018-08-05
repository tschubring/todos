// src/components/Todo.js

import React from 'react'
import PropTypes from 'prop-types'
import { space } from '../utils/formatting'

const Todo = ({ onClick, upButton, downButton, xButton, completed, text }) => (

      <div className="ebox">
        <div className="cbox">
          <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {space(text)} 
          </li>
        </div>
        <div className="bbox">
           <button onClick={upButton}>&#8679;</button>
           <button onClick={downButton}>&#8681;</button>
           <button onClick={xButton}>X</button>
        </div>
      </div>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  upButton: PropTypes.func.isRequired,
  downButton: PropTypes.func.isRequired,
  xButton: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
