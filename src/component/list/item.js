import React from 'react'
import { connect } from 'react-redux';
import {RemoveTask, UpdateTask, EditTask} from '../../action/todosActions'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: true,
            text: this.props.todo.text,
            id: this.props.todo.id,
            completed: this.props.todo.completed
        }
    }
    handleDisable = () => {
        if(!this.state.disabled){
            this.props.edit(this.state)
            this.setState({disabled: true})
        }else{
            this.setState({disabled: !this.state.disabled})
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div key={this.state.id}> 
                {/* <p className={this.props.todo.completed ? 'crossed' : undefined}>{this.props.todo.text}</p> */}
                <input className={this.props.todo.completed ? 'crossed' : undefined} onChange={this.handleChange} 
                disabled={this.state.disabled ? true : false} type="text" value={this.state.text}/>
                <button onClick ={()=>this.props.add(this.state.id)}>{this.state.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick = {()=>this.props.remove(this.state.id) }>Delete</button>
                <button onClick = {this.handleDisable}>Edit</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: text => dispatch(RemoveTask(text)),
        add: text => dispatch(UpdateTask(text)),
        edit: todo => dispatch(EditTask(todo)),
    }
}

export default connect(null, mapDispatchToProps)(Item);