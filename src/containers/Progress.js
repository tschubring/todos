// src/containers/Progress.js

import { connect } from 'react-redux'
import { ProgBar } from '../components/ProgBar'

const getProgs = (todos, activeColor, seconds) =>{
  const completedPercent=getCompletedPercent(todos);
  const timePercent=getTimePercent(todos, seconds);
  const timePercentCapped= timePercent>100 ? 100: timePercent;
  const timeLabel=getRemainingTime(todos, seconds);

  return [
      {pStyle:{width: completedPercent+'%', backgroundColor:activeColor}, lStyle:{color:activeColor}, label:completedPercent+'%'},
      {pStyle:{width: timePercentCapped+'%', backgroundColor:activeColor}, lStyle:{color:activeColor}, label:timeLabel}
    ];

}
const getCompletedPercent = (todos) =>{
    let completedPercent=0;

    let allMinutes=0;
    let completedMinutes=0;
    
    for (let a=0; a<todos.length; a++){
      allMinutes+=todos[a].minutes;
      if(todos[a].completed){completedMinutes+=todos[a].minutes;}
    }
    if(allMinutes>0){completedPercent=Math.floor(100*completedMinutes/allMinutes);}
    return completedPercent;
}

const getTimePercent = (todos, seconds) =>{
    let timePercent=0;
    let allSeconds=0;
    for (let a=0; a<todos.length; a++){
      allSeconds+=todos[a].minutes*60;
    }
    if(allSeconds>0){timePercent=Math.floor(100*seconds/allSeconds);}
    return timePercent;
}
const getRemainingTime = (todos, seconds) =>{

    let remainingTime='0:00';
    let totalSeconds=60*todos.map(item => item.minutes).reduce((a, b) => a + b);
/*
    let completeds = todos.filter(function (el){return el.completed;});
    let completedSeconds=0;
    if(completeds.length>0){
      completedSeconds=60*completeds.map(item => item.minutes).reduce((a, b) => a + b);
    }
*/
    let remainSeconds=totalSeconds-seconds;
    let minus="";
    if(remainSeconds<0){
      minus="-";
      remainSeconds=-remainSeconds;
    }
    let minutes=Math.floor(remainSeconds/60);
    let secs=remainSeconds%60;
    if(secs<10){secs="0"+secs;}
    

    remainingTime=minus+minutes+":"+secs;
    //console.log(remainingTime);
    return remainingTime;
}

const mapStateToProps = state => ({
  progs: getProgs(state.todos, state.activeColor, state.seconds)
})



export default connect(
  mapStateToProps
)(ProgBar)
