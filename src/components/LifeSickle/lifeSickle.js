import React, { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state={
            favorute_number: 7
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{ favorute_number: props.number }
    // }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({favorute_number: this.state.favorute_number*2})
    //     },3000)
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    getSnapshotBeforeUpdate(){
        
    }
    updateFavoruteNumber(){
        this.setState({favorute_number:17})
        console.log(this.state.favorute_number);
    }
    render() {
        return (
            <div>
                <span> My favorute number is {this.state.favorute_number}</span>
            </div>
        )
    }
}
export default Lifecycle