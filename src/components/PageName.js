// src/components/PageName.js

import React, {  
  Component,
} from 'react';

export class PageName extends Component {
  render() {
  let min=Math.floor(this.props.sec/60);
  let sec=this.props.sec%60;
  if(sec<10){sec='0'+sec;}
  let minSec=min+':'+sec;
    return (
      <div>

        <h1>{this.props.name || 'Hello World!'}</h1>
        <p>{minSec}</p>
      </div>
    );
  }

}
export default PageName;