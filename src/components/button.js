import React,{Component} from 'react';
import "./button.css"

export default class Button extends Component{
    constructor(){
        super()
        this.state={
            active: false,
            deltaX:0,
            deltaY:0
        }
        this.myRef = React.createRef();
    }
    render(){
        return(
            <button ref={this.myRef} className="button2" onClick={this.wave.bind(this)}>
            <span className="val">{this.props.value}</span>
            {this.state.active?<span className="circle" style={{left:this.state.deltaX,top:this.state.deltaY}} onAnimationEnd={this.aEnd.bind(this)}></span>:""}
            </button>
        );
    }
    wave(e){
        let {x,y} = this.myRef.current.getBoundingClientRect()
        let {clientX,clientY} = e
        let deltaX = clientX-x-5;
        let deltaY = clientY-y-5;
        this.setState({
            active:true,
            deltaX:deltaX,
            deltaY:deltaY
        })
    }
    aEnd(){
        this.setState({
            active:false
        })
    }
}