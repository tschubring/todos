// src/reducers/activeColor.js
const activeColor = (state = '#fff', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_COLOR':
      return action.activeColor
    default:
      return state
  }
}

export default activeColor