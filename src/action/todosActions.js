import {Add_Task,Remove_task,Update_Task, Edit_Task} from './types'
export const AddTask=(newTodo) => {
    return{
        type:Add_Task,
        payload:newTodo 
    }
}
export const EditTask=(taskUpdated) => {
    return{
        type:Edit_Task,
        payload:taskUpdated 
    }
}
export const RemoveTask=(id) => {
    return{
        type:Remove_task,
        payload:id 
    }
}

export const UpdateTask=(id) => {
    return{
        type:Update_Task,
        payload:id 
    }
}


// export default  {add_Task,deleteTask} ;