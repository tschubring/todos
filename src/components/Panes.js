// src/components/Panes.js

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleCanvasList from '../containers/VisibleCanvasList'
/*
import FilterNav from '../components/FilterNav'
        <FilterNav />
*/
import React, {  
  Component,
} from 'react';



export class Panes extends Component {


  render() {
    let view=(
    <div  className="setupHolder"><h3>Paused</h3>

    </div>);

    if(this.props.name==="SETUP"){
      view=(
        <div className="setupHolder">
<h3>{this.props.name || 'Hello World!'}</h3>
        <AddTodo />
        <VisibleTodoList />
        </div>
      );
    }
    else if(this.props.name==="GET_OUT_THE_DOOR"){
      view=(
        <div>
        <VisibleCanvasList />
        </div>
      );
    }
    return (
      <div>

        
        {view}
      </div>
    );
  }

}
export default Panes;