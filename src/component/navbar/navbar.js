import React from 'react';
import { connect } from 'react-redux';
import {AddTask} from '../../action/todosActions'
import uuid from 'uuid'
import './navbar.css'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            completed: false
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input className='input_list' type='text' onChange={this.handleChange} placeholder='Add your todo' />
                <button className='butt_add' onClick={() => this.props.add({...this.state, id: uuid()})}>Add</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: text => dispatch(AddTask(text))
    }
}
const mapStateToProps = (state) => {
    return {
        input : state.input
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)