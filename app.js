//import ui lib to be used
import styled from 'styled-components';
// styled-components lib make me write css in js

import React,{Component} from 'react';
//if i put compunent up here with import i don hav to say  "class somethinf extends React.Component{}"
import ReactDOM from 'react-dom';


let Input = styled.input `
width:100%;
height:40px;
border:2px solid black;
padding:0% 2%;
`

let Button = styled.button `
border:none;
background-color:red;
color:white;
padding:10px;
`


//define a stateful components
class Todos extends Component{
    constructor(){
        //initial state
        super()
        this.state = {
            todos:[],
            inputValue:'hi'
        }
    }
    //when the user is writing in the input update the var in the key
    oninputchange(event){
        this.setState({
           inputValue: event.target.value
        })
    }

    onKeyUp(event){
        let todos = this.state.todos
        //we can use the name of the var in another scoop 
        if (event.key === 'Enter'){
            console.log(event.key)
            todos.unshift({
                text: this.state.inputValue,
                status:'unchecked'
            })
            console.log(todos)
            this.setState({
                //to asign the value of the new todos thats is on the keyup then asign it to the array
                todos:todos,
                inputValue:''
                //to make the input value empty
            })
        }
    }

    render(){
        //the displayable things
        return(
            //in any entry comp it sould be just one parent
            //bind makes "this" refers to the class this not to the function this cause this of the function is not this of the class
            <div className="container">
                
                <Input type="text" value={this.state.inputValue} onKeyUp={this.onKeyUp.bind(this)} onChange={this.oninputchange.bind(this)}></Input>

                {
                    //this curly phrases is to itirate in the array and map the opjects of it in a loop
                    this.state.todos.map((item , i)=>{
                        return <Todo key={i} item={item}/>
                    })
                    //every compunent in a loop shuld have a unique id
                }
            </div>
        )
    }
}

function Todo(props){
    //i dont need the key here so i put it in the todo 
    return (
    <div>

    <div className="item" >{props.item.text}</div>
    <Button>remove</Button>
    </div>
    
    
    
    )
}

//define a ststeless component
function App(){
    return(
        <Todos />

    )
}


//display the page content
ReactDOM.render(<App/>,document.getElementById('root'))