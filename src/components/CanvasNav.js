import React from 'react';
export class CanvasNav extends React.Component {
  constructor(props){
    super(props);
    this.areas=[];
    this.state={
      selectedGlom:this.props.selectedGlom,
      highlightGlom:this.props.highlightGlom,
    };
    //console.log('constructor '+this.props.selectedGlom);
    
    this.handleClick=this.props.handleClick.bind(this);
    this.canvasClick=this.canvasClick.bind(this);
  }
  componentDidUpdate() {
    //console.log('componentDidUpdate');
    //console.log(this.props);
    //this.props.conf.color=this.props.color;
    this.redrawCanvas(this.props.selectedGlom, this.props.activeColor, this.props.highlightGlom, this.props.highlightColor);
  }
  componentWillUpdate() {
    //console.log('componentWillUpdate');
    
    //this.redrawCanvas();
  }
  componentDidMount() {
    //console.log('componentDidMount');
    this.redrawCanvas(this.props.selectedGlom, this.props.activeColor, this.props.highlightGlom,this.props.highlightColor);
  }
  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps');
    if(this.state.selectedGlom !== nextProps.selectedGlom){
      //console.log(this.props.selectedGlom +' !== '+ nextProps.selectedGlom);
      this.setState({
        selectedGlom:nextProps.selectedGlom,
        highlightGlom:nextProps.highlightGlom,
      });
      //this.redrawCanvas(nextProps.selectedGlom, nextProps.highlightGlom, nextProps.highlightColor);
    }
    else{
      //console.log(this.props.selectedGlom +' === '+ nextProps.selectedGlom);
    }
  }
  redrawCanvas(selectedGlom, activeColor, highlightGlom, highlightColor){
    //console.log('redrawCanvas selected:' +selectedGlom+' ac:'+activeColor+' highlight:'+highlightGlom+' hc:'+highlightColor);
    //console.log(this.state.selectedGlom);
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d");
    ctx.lineCap="butt";
    ctx.lineJoin="round";
    ctx.lineWidth=this.props.height/100;

    ctx.fillStyle="#000";
    ctx.fillRect(0,0,this.props.width,this.props.height);
    this.props.conf.ctx=ctx;
    this.areas=this.textRect(this.props.conf, selectedGlom, activeColor, highlightGlom, highlightColor);
  }
  textRect(conf, selectedGlom, activeColor, highlightGlom, highlightColor){
    var fieldW=this.props.width-conf.x*2;
    var fieldH=this.props.height-conf.y*2;
    conf.ctx.font="100px "+conf.font;
    var fieldAspect=fieldW/fieldH;
    //console.log(fieldAspect);
    var fullLength=conf.ctx.measureText(this.props.allGlom).width;  
    var areaOfText=fullLength*100;
    var wSquared=areaOfText*fieldAspect;
    var testW=Math.sqrt(wSquared);
    var testH=areaOfText/testW;
    var lineCount=Math.floor((1-.25*conf.topHeavy)*testH/100);
    //console.log(lineCount);
    var lines=[this.props.allGlom.split(" ")];
    for(let l=1; l<lineCount; l++){
      lines.push([]);
    }
    var longestLineNum=0;
    var loopout=20000;
    while ((longestLineNum < lines.length-1)&&(loopout>0)){
      loopout--;
      if(loopout===0){alert('loopout');}
      var word=lines[longestLineNum].pop();
      lines[longestLineNum+1].unshift(word);
      longestLineNum=this.longestNum(conf.ctx,lines,conf.topHeavy)
    }
    //console.log(lines);
    var atY=this.measureLines(conf.ctx,conf.font,lines,fieldW);
    var underflow=fieldH-atY;
    //console.log(fieldH+' '+atY)
    //console.log(linePad+'='+underflow+'/'+lineCount);
    var linePad=underflow/lineCount;  
    return this.drawLines(conf.font, lines, linePad, conf.ctx, conf.x, conf.y, fieldW, fieldH, conf.stroke0, conf.fill, conf.stroke1, conf.strokeOn, activeColor, conf.strokeOff, conf.fillOff, selectedGlom, highlightGlom, highlightColor);
  }
    longestNum(ctx, lines, topHeavy){
    var longestLineLength=-1;
    var longestLineNum=-1;
    for (var l=0; l<lines.length; l++){
      var thisLineLength=ctx.measureText(lines[l].join(" ")).width;
      thisLineLength*=1+(lines.length-l)*topHeavy;
      if(thisLineLength>longestLineLength){
        longestLineLength=thisLineLength;
        longestLineNum=l;
      }
    }
    return longestLineNum; 
  }
    measureLines(ctx, font, lines, width){
    var atY=0;
    for (var l=0; l<lines.length; l++){
      ctx.font=100+"px "+font;
      var line=lines[l].join(" ");
      var testWidth=ctx.measureText(line).width;
      var frac=width/testWidth;
      var size=100*frac;
      if(line!==""){
        atY+=size;
      }
    }
    //console.log('atY '+atY);
    return atY; 
  }

drawLines(font, lines, linePad, ctx, x, y, w, h, stroke0, fill, stroke1, strokeOn, fillOn, strokeOff, fillOff, selectedGlom, highlightGlom, highlightColor){
  var hCanv=document.getElementById('highlightCanvas');
  var hCtx=hCanv.getContext('2d');
        hCanv.width=hCanv.width;

  var adjust=0;
  var areas=[];
  ctx.textBaseline="hanging";
  var atY=0;
  for (var l=0; l<lines.length; l++){
    ctx.font="100px "+font;
    var line=lines[l].join(" ");
    //console.log(atY+' '+line);
    var temp=line.split("_");
    var lineSpaces=temp.join(" ");
    var testWidth=ctx.measureText(lineSpaces).width;
    var frac=w/testWidth;
    var size=100*frac;
    ctx.font=size+"px "+font;
    //console.log(size);
    var atX=x;
    for (var p=0; p<lines[l].length; p++){
      var phrase=lines[l][p];
      temp=phrase.split("_");
      var phraseSpaces=temp.join(" ");
      var phraseWidth=ctx.measureText(phraseSpaces).width;
      var phraseWidthSpace=ctx.measureText(phraseSpaces+" ").width;
      areas.push({phrase:phrase, l:atX, t:y+atY-size*adjust/2, r:atX+phraseWidth, b:y+atY-size*adjust/2+size});
      if(selectedGlom.indexOf(phrase)>-1){
        ctx.fillStyle=fillOff;
        ctx.strokeStyle=strokeOff;
      } 
      else{
        ctx.fillStyle=fillOn;
        ctx.strokeStyle=strokeOn;
      }


      //ctx.strokeRect(atX,y+atY-size*adjust/2, phraseWidth, size);

      if(stroke0){
        ctx.strokeText(phraseSpaces,atX,y+atY+size*adjust);
      }
      if(fill){
        ctx.fillText(phraseSpaces,atX,y+atY+size*adjust);
      }
      if(stroke1){
        ctx.strokeText(phraseSpaces,atX,y+atY+size*adjust);
      }

      if(highlightGlom.indexOf(phrase)>-1){
        var grd=hCtx.createRadialGradient(atX+phraseWidth/2,atY+size/2,0,atX+phraseWidth/2,atY+size/2,size);
        grd.addColorStop(0,highlightColor); 
        grd.addColorStop(1,"rgba(0,0,0,0)");
        hCtx.fillStyle=grd;   
        hCtx.fillRect(0,0,this.props.width,this.props.height);
      }


      atX+=phraseWidthSpace;
    }  
    //ctx.strokeRect(x,y+atY,w,size);
    
    if(line!==""){
      atY+=size+linePad;
    }

  }
  ctx.globalCompositeOperation="lighten";
  ctx.drawImage(hCanv,0,0);
  ctx.globalCompositeOperation="source-over";
  return areas
}
  canvasClick(e){
    //console.log(e.nativeEvent);
    const x=e.nativeEvent.offsetX;
    const y=e.nativeEvent.offsetY;
    let found="";
    for (let a=0; a<this.areas.length; a++){
    //console.log(e.nativeEvent.clientY+" "+this.areas[a].t);
      if((x>this.areas[a].l)&&(x<this.areas[a].r)&&(y>this.areas[a].t)&&(y<this.areas[a].b)){
       found=this.areas[a].phrase;
       //alert(found);
      }
    }
    //console.log(found);

    this.props.handleClick(found);
  }
  render(){

    return(
      <div>
        <canvas ref="canvas" width={this.props.width} height={this.props.height} onClick={this.canvasClick} />
        <canvas id="highlightCanvas" width={this.props.width} height={this.props.height} onClick={this.canvasClick} style={{display:"none"}}/>
      </div>
    )

  }
}
