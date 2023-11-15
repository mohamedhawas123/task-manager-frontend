import * as actionTypes from '../store/action/actionType'
import { userState } from './user';

export interface Task {
    id: number,
    title: string;
    description: string;
    dueDate : Date,
    isComplete: boolean
}

export interface TaskState {
    tasks: Task[];
    task: Task | null;
    error: Error | null;
    loading: boolean;
    success: boolean;
}

export interface State {
    tasks: TaskState;
    user: userState
  }

export interface StartListTaskAction {
    type: typeof actionTypes.STARTLISTTASK;
}

export interface SuccessListTaskAction {
    type: typeof actionTypes.SUCCESSLISTTASK;
    payload: Task[];
}

export interface FailListTaskAction {
    type: typeof actionTypes.FAILLISTTASK;
    error: Error;
}

export interface StartCreateTaskAction {
    type: typeof actionTypes.STARTCREATETASK;
}

export interface SuccessCreateTaskAction {
    type: typeof actionTypes.SUCCESSCREATETASK;
    payload: Task; 
}

export interface FailCreateTaskAction {
    type: typeof actionTypes.FAILCREATETASK;
    error: Error;
}

export interface StartUpdateTaskAction {
    type: typeof actionTypes.STARTUPDATETASK;
}

export interface SuccessUpdateTaskAction {
    type: typeof actionTypes.SUCCESSUPDATETASK;
    payload: Task; 
}

export interface FailUpdateTaskAction {
    type: typeof actionTypes.FAILUPDATETASK;
    error: Error;
}

export interface StartDeleteTaskAction {
    type: typeof actionTypes.STARTDELETETASK;
}

export interface SuccessDeleteTaskAction {
    type: typeof actionTypes.SUCCESSDELETETASK;
    payload: number | string; 
}

export interface FailDeleteTaskAction {
    type: typeof actionTypes.FAILDELETETASK;
    error: Error;
}
