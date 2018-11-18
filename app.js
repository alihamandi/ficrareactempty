//import ui lib to be used
import React,{Component} from 'react';
//if i put compunent up here with import i don hav to say  "class somethinf extends React.Component{}"
import ReactDOM from 'react-dom';

//define a stateful components
class Todos extends Component{
    constructor(){
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
        return(
            //in any entry comp it sould be just one parent
            //bind makes "this" refers to the class this not to the function this cause this of the function is not this of the class
            <div className="container">
                
                <input type="text" value={this.state.inputValue} onKeyUp={this.onKeyUp.bind(this)} onChange={this.oninputchange.bind(this)}></input>

                {
                    //this curly phrases is to itirate in the array and map the opjects of it in a loop
                    this.state.todos.map((item , i)=>{
                        return <div className="item" key={i}>{item.text}</div>
                    })
                }
            </div>
        )
    }
}

//define a ststeless component
function App(){
    return(
        <Todos />

    )
}


//display the page content
ReactDOM.render(<App/>,document.getElementById('root'))