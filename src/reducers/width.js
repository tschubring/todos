// src/reducers/width.js
const width = (state = 400, action) => {
  switch (action.type) {
    case 'SET_WIDTH':
      return action.width
    default:
      return state
  }
}

export default width