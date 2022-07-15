import React,{Component} from 'react'
import './addForm.css'


class creatForm extends Component{
    constructor(props){
        super(props)
        this.state={
            tr: ''
        }
    }
    add_form=(e)=>{
        e.preventDefault()
        const f_name = document.querySelector("#firstName").value
        const l_name = document.querySelector("#lastName").value
        const year = document.querySelector("#year").value
        const trr = `<tr>
                        <td>${f_name }</td>
                        <td>${l_name }</td>
                        <td>${year }</td>
                    </tr>`
        this.setState({tr: this.state.tr+trr})
        document.querySelector("#table").innerHTML=this.state.tr
    //     this.state.f_name=''
    //     this.state.l_name=''
    //     this.state.year=''
    // }
    render()
    {
        return (
            <div>
                <div>
                    <form id='idForm' onSubmit={this.add_form}>
                        <input id='firstName' type='text' placeholder='First-name' />
                        <input id='lastName' type='text' placeholder='Lastst-name' />
                        <input id='year' type='number' placeholder='age' />
                        <button type='submit'>OK</button>
                    </form>
                </div>
                <div>
                    <table id='table'></table>
                </div>
            </div>
        )
    }

}









// let tr = ''
// const add_form=(e)=>{
//     e.preventDefault()
//     const f_name = document.querySelector("#firstName").value
//     const l_name = document.querySelector("#lastName").value
//     const year = document.querySelector("#year").value
//     tr += `<tr>
//                    <td>${f_name}</td>
//                    <td>${l_name}</td>
//                    <td>${year}</td>
//                 </tr>`
//     console.log(tr)
//     document.querySelector("#table").innerHTML = tr
// }
// const forms =()=>{
//     return (
//         <div>
//             <div>
//                 <form id='idForm' onSubmit={add_form}>
//                     <input id='firstName' type='text' placeholder='First-name' />
//                     <input id='lastName' type='text' placeholder='Lastst-name' />
//                     <input id='year' type='number' placeholder='age' />
//                     <button type='submit'>OK</button>
//                 </form>
//             </div>
//             <div>
//                 <table id='table'></table>
//             </div>
//         </div>
//     )
// }

export default creatForm