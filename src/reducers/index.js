import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import seconds from './seconds'
import page from './page'
import width from './width'
import height from './height'
import activeColor from './activeColor'
import highlightColor from './highlightColor'

export default combineReducers({
  todos,
  visibilityFilter,
  page,
  width,
  height,
  activeColor,
  highlightColor,
  seconds
})
