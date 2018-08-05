// src/actions/index.js


export const addTodo = (text, minutes) => ({
  type: 'ADD_TODO',
  id: text,
  minutes: minutes,
  text
})
export const handleClick = id => ({
  type: 'HANDLE_CLICK',
  id
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const upButton = id => ({
  type: 'UP_BUTTON',
  id
})
export const downButton = id => ({
  type: 'DOWN_BUTTON',
  id
})
export const xButton = id => ({
  type: 'X_BUTTON',
  id
})
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//set up actions and value/instance names
export const setPage = page => ({
  type: 'SET_PAGE',
  page
})
export const setActiveColor = activeColor => ({
  type: 'SET_ACTIVE_COLOR',
  activeColor
})
export const setHighlightColor = highlightColor => ({
  type: 'SET_HIGHLIGHT_COLOR',
  highlightColor
})
export const Pages = {
  SETUP: 'SETUP',
  GET_OUT_THE_DOOR: 'GET_OUT_THE_DOOR',
  PAUSE: 'PAUSE'
}
