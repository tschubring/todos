// src/components/ProgBar.js
/* useage
    const progs=[
      {pStyle:{width: ui.completedPercent+'%', backgroundColor:color}, label:ui.completedPercent+'%'},
      {pStyle:{width: ui.timePercent+'%', backgroundColor:color}, label:ui.timeLabel}
    ];

*/
//          <ProgBar progs={progs} />


import React from 'react';

export class ProgBar extends React.Component {

  render() {
    //console.log(this.props.progs);
    return (
      <div className="ProgWrapper">
        {this.props.progs.map(function(prog, index){
          return (
      <div className="ProgHolder" key={index}>
            <div className="ProgBack">
              <div className="ProgFill" style={prog.pStyle}></div>
            </div>
            <div className="ProgLabel" style={prog.lStyle}>{prog.label}</div>
      </div>
          );
        }, this)}
      </div>
    )
  }

}
