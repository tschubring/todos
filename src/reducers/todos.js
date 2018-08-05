// src/reducers/todos.js

import { defaultData } from '../defaultData'
import { underscore } from '../utils/formatting'

const todos = (state = defaultData, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      let keys=[];
      for(let k=0; k<state.length; k++){
        keys.push(state[k].id);
      }
      //console.log(keys);
      if(keys.indexOf(action.id)===-1){
        //console.log(action.minutes +' minutes');
        return [
          ...state,
          {
            id: underscore(action.id),
            text: underscore(action.text),
            minutes: action.minutes,
            completed: false
          }
        ]
      }
      else{
        return state
      }
      
    case 'RESET_TODOS':
      console.log('RESET_TODOS');
      return state.map(todo => {todo.completed=false; return todo;})
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'UP_BUTTON':{
      var newState=JSON.parse(JSON.stringify(state));
      let oks=Object.keys(state);
      for (let k=0; k<oks.length; k++){
        if(state[oks[k]].id===action.id){
          const above=(k-1+oks.length)%oks.length;
          newState[oks[k]]=state[oks[above]];
          newState[oks[above]]=state[oks[k]];
        }
      }
      return newState;
    }
    case 'DOWN_BUTTON':{
      let newState=JSON.parse(JSON.stringify(state));
      let oks=Object.keys(state);
      for (let k=0; k<oks.length; k++){
        if(state[oks[k]].id===action.id){
          const below=(k+1)%oks.length;
          newState[oks[k]]=state[oks[below]];
          newState[oks[below]]=state[oks[k]];
        }
      }
      return newState;
    }
    case 'X_BUTTON':{
      let newState=[];
      for (let k=0; k<state.length; k++){
        if(state[k].id!==action.id){
          newState.push(state[k]);
        }
      }
      return newState;
    }
    case 'HANDLE_CLICK':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
