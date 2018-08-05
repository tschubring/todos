// src/index.js

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './index.css';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  rootReducer, 
  persistedState
)
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

// second tick business logic
setInterval(() => {
  let state=store.getState();
  if(state.width !==window.innerWidth){
    store.dispatch({ type: 'SET_WIDTH', width: window.innerWidth });
  }
  if(state.height !==window.innerHeight-110){
    store.dispatch({ type: 'SET_HEIGHT', height: window.innerHeight-110 });
  }
  state=store.getState();
  store.dispatch({ type: 'SECONDS', page: state.page });
  let totalSeconds=60*state.todos.map(item => item.minutes).reduce((a, b) => a + b);
  let completeds = state.todos.filter(function (el){return el.completed;});

  let completedSeconds=0;
  if(completeds.length>0){
    completedSeconds=60*completeds.map(item => item.minutes).reduce((a, b) => a + b);
  }
  //console.log(totalSeconds+" "+completedSeconds);
  if(state.seconds===0){
    store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#fff' });
  }
  state=store.getState();
  if(totalSeconds===completedSeconds){// 100% done
    store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#00f' });
    store.dispatch({ type:'TIMESUP', page:state.page});
    store.dispatch({ type:'RESET_TODOS'});
    store.dispatch({ type:'SET_PAGE', page: 'PAUSE' });

  }
  else{
    if(state.seconds<completedSeconds){// ahead of schedule
      store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#fff' });
    }
    else{// 
      if(state.seconds<totalSeconds){ // behind schedule
        store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#ff0' });
      }
      else{// late flash!
        if(state.seconds%2===0){
          store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#ff0' });
        }
        else{
          store.dispatch({ type:'SET_ACTIVE_COLOR', activeColor: '#f00' });
        }
      }
    }
  }

  if(state.seconds%2===0){
    store.dispatch({ type:'SET_HIGHLIGHT_COLOR', highlightColor: '#aaa' });
  }
  else{
    store.dispatch({ type:'SET_HIGHLIGHT_COLOR', highlightColor: '#fff' });
  }


}, 1000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
