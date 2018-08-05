// src/reducers/highlightColor.js
const highlightColor = (state = '#ff0', action) => {
  switch (action.type) {
    case 'SET_HIGHLIGHT_COLOR':
      return action.highlightColor
    default:
      return state
  }
}

export default highlightColor