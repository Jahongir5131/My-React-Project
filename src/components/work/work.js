import React,{Component} from 'react';


 
class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state = {user:{
            name:'',
            age: '',
        }}
        // console.log(' [Constructor]...');
    }
    componentDidMount(){
        // console.log(' [componentDidMount ]...');
        this.setState={user:{name:'Jahongir', age: 25}, num: 0}
    }
     
    updateNumber=()=>{
        this.state(oldState=>{
            return{
                num: oldState.num + 1
            }
        })
    }

    render(){
        // console.log(' [Render] is...');
        const {num}= this.state;
        const {age}=this.user
        return(
            <div>
                <h1>Number:{num} </h1>
                <h1>Age:{age} </h1>
                <button onClick={this.updateNumber}>Update</button>
            </div>
        )
    }
}

export default Lifecycle