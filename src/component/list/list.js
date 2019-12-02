import React from 'react' ;
import {connect} from 'react-redux'
import Item from './item';
class List extends React.Component{
    
  edit = () => {
    this.props.editTask(this.state);
  };
    render(){
        return (
            <div>
             {this.props.todos.map((el,index)=> <Item todo={el}/>)}
            
            </div>
        ) ;
    }}

  const mapStateToProps=(state)=> {
        return {
            todos : state.taskreducer
        }
    }




export default connect(mapStateToProps)(List) ;