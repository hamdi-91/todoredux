import {Add_Task,Remove_task,Update_Task, Edit_Task} from '../action/types' ;

const taskreducer = (state=[] , action)=> {
    switch (action.type){
        case Add_Task:
        return state.concat(action.payload);
        case  Remove_task:
            return state.filter(el=> el.id !== action.payload )
            case Update_Task:
             return state.map(todo =>
         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo )
         case  Edit_Task:
                return state.map(el=> el.id === action.payload.id ? action.payload : el)
        default: 
        return state;
    }
}
export default taskreducer ;

