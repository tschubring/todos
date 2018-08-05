// src/reducers/seconds.js

const seconds = (state = 0, action) => {
  switch (action.type) {
    case 'SECONDS':
      if(action.page==='GET_OUT_THE_DOOR'){
        //console.log('SECONDS '+action.page);
        return state+1
      }
      else{
        return state
      }
    case 'TIMESUP':
      if(action.page==='GET_OUT_THE_DOOR'){
        return 0
      }
      else{
        return state
      }
    default:
      return state
  }
}

export default seconds
