import { FailListTaskAction, StartListTaskAction, TaskState, SuccessListTaskAction, Task, StartCreateTaskAction, SuccessCreateTaskAction, FailCreateTaskAction, StartUpdateTaskAction, SuccessUpdateTaskAction, FailUpdateTaskAction, StartDeleteTaskAction, SuccessDeleteTaskAction, FailDeleteTaskAction } from '../../models/task';
import * as actionTypes from '../action/actionType'



const initialState:TaskState = {
    tasks : [],
    task: null,
    error: null,
    loading: false,
    success: false
}

type Action = 
| StartListTaskAction
    | SuccessListTaskAction
    | FailListTaskAction
    | StartCreateTaskAction
    | SuccessCreateTaskAction
    | FailCreateTaskAction
    | StartUpdateTaskAction
    | SuccessUpdateTaskAction
    | FailUpdateTaskAction
    | StartDeleteTaskAction
    | SuccessDeleteTaskAction
    | FailDeleteTaskAction;

;


const reducer = (state=initialState, action:Action) => {
    switch(action.type) {
        case actionTypes.STARTLISTTASK:
        case actionTypes.STARTCREATETASK:
        case actionTypes.STARTUPDATETASK:
        case actionTypes.STARTDELETETASK:
            return { ...state, loading: true, error: null };

        case actionTypes.SUCCESSLISTTASK:
            return { ...state, loading: false, tasks: action.payload };

        case actionTypes.SUCCESSCREATETASK:
            return { ...state, loading: false, tasks: [...state.tasks, action.payload] };

        case actionTypes.SUCCESSUPDATETASK:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            };

        case actionTypes.SUCCESSDELETETASK:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case actionTypes.FAILLISTTASK:
        case actionTypes.FAILCREATETASK:
        case actionTypes.FAILUPDATETASK:
        case actionTypes.FAILDELETETASK:
            return { ...state, loading: false, error: action.error };
        

        default:
            return state
    }
}

export default reducer