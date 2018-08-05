import React from 'react';

export class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.checkIt = this.checkIt.bind(this);
    this.unCheckIt = this.unCheckIt.bind(this);
    this.xButton = this.xButton.bind(this);
    this.upButton = this.upButton.bind(this);
    this.downButton = this.downButton.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked:this.props.checked
    };
  }

  checkIt(key) {
    //console.log('checkIt '+key);
    this.setState({checked:true});
    this.props.checkboxCheck(key);
  }

  unCheckIt(key) {
    //console.log('unCheckIt '+key);
    this.setState({checked:false});
    this.props.checkboxUncheck(key);
  }
  xButton(evt){
    this.props.xClick(this.props.index);
  }
  upButton(evt){
    this.props.upClick(this.props.index);
  }
  downButton(evt){
    this.props.downClick(this.props.index);
  }
  handleChange(evt) {
     //console.log('handleChange'+this.props.index);
     if(this.state.checked !== evt.target.checked) {
        if(evt.target.checked){this.checkIt(this.props.index);}
        else{this.unCheckIt(this.props.index);}
     }
  }
  componentWillReceiveProps(nextProps){
  }
  render() {
    //console.log('Checkbox');
    const strChecked=this.props.strChecked;
    return (
      <div className="ebox" key={this.props.index}>
        <div className="cbox">
           <label><input type="checkbox" checked={JSON.parse(strChecked)} onChange={this.handleChange} id={this.props.index} />  {this.props.label}</label>
        </div>
        <div className="bbox">
           <button onClick={this.upButton}>&#8679;</button>
           <button onClick={this.downButton}>&#8681;</button>
           <button onClick={this.xButton}>X</button>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
}

Checkbox.defaultProps = {
}
