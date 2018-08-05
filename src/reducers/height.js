// src/reducers/height.js
const height = (state = '#fff', action) => {
  switch (action.type) {
    case 'SET_HEIGHT':
      return action.height
    default:
      return state
  }
}

export default height