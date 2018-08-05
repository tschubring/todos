// src/containers/VisibleCanvasList.js

import { connect } from 'react-redux'
import { handleClick } from '../actions'
import { CanvasNav } from '../components/CanvasNav'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_FIRST':
      let first=[];
      let active=todos.filter(t => !t.completed);
      if(active.length>0){first.push(active[0]);}
      return first
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

      const conf={
      topHeavy:0,
      font:"Courier",
      x:10,
      y:10,
      stroke0:false,
      fill:true,
      stroke1:false,
      strokeOn:"red",
      strokeOff:"white",
      fillOff:"#666",
      };
//      w:window.innerWidth-20,
//      h:window.innerHeight-130,
//      conf.width=window.innerWidth;
//      conf.height=window.innerHeight-115;

const mapStateToProps = state => ({
  conf: conf,
  width: state.width,
  height: state.height,
  activeColor:state.activeColor,
  highlightColor:state.highlightColor,
  selectedGlom: getVisibleTodos(state.todos, 'SHOW_COMPLETED').map(e => e.id).join(" "),
  highlightGlom: getVisibleTodos(state.todos, 'SHOW_FIRST').map(e => e.id).join(" "),
  allGlom: getVisibleTodos(state.todos, 'SHOW_ALL').map(e => e.id).join(" ")
})

const mapDispatchToProps = dispatch => ({
  handleClick: id => dispatch(handleClick(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasNav)
