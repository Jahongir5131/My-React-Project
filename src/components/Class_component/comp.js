import React,{Component} from "react"
import Link from "../Func_component/func_com"

class Saidbar extends Component{
 
    clickHandler=()=>{
        alert('Assalomu Alaykum')
    } 
    render(){
        const {title, data}=this.props 
        return(
            <div>
                <h1>Today.uz</h1>
                <h4> {title},{data.name} </h4>
                <button onClick={this.clickHandler}> Click </button>
                <hr />
                <Link url="/my-link" title="Jahongir" />
            </div>
      )
    }
}

export default Saidbar;