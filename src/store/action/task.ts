// Action types
import { Dispatch } from 'redux';
import axios from 'axios';
import { Task } from '../../models/task';
import * as actionType from './actionType';
import { ThunkAction } from 'redux-thunk';

interface ListTaskAction {
    type: string;
    payload?: Task[];
    error?: any;
}

const baseUrl = "http://localhost:3000"

export const getAllTask = (): ThunkAction<void, unknown, unknown, ListTaskAction> => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: actionType.STARTLISTTASK
        });

        const response = await axios.get(`${baseUrl}/task`);
        const tasks: Task[] = response.data;

        dispatch({
            type: actionType.SUCCESSLISTTASK,
            payload: tasks
        });
    } catch (e) {
        dispatch({
            type: actionType.FAILLISTTASK,
            error: e
        });
    }
};


export const createTask = (title:string, description:string, date:Date) => async (dispatch:Dispatch) => {
    try {
        dispatch({ type: actionType.STARTCREATETASK });


        const response = await axios.post(`${baseUrl}/task`, {
            title:title,
            description:description,
            dueDate:date
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );

        console.log(response)

        dispatch({
            type: actionType.SUCCESSCREATETASK,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: actionType.FAILCREATETASK,
            error: e
        });
        console.log(e)
    }
};


export const updateTask = (id:number, updatedTask:Task) => async (dispatch:Dispatch) => {
    try {
        dispatch({ type: actionType.STARTUPDATETASK });

        await axios.patch(`${baseUrl}/task/${id}`, {
            title:updatedTask.title,
            description: updatedTask.description,
            dueDate: updatedTask.dueDate,
            isComplete: updatedTask.isComplete
        });

        // dispatch({
        //     type: actionType.SUCCESSUPDATETASK,
        //     payload: { id, ...updatedTask }
        // });
    } catch (e) {
        dispatch({
            type: actionType.FAILUPDATETASK,
            error: e
        });
        console.log(e)
    }
};

export const deleteTask = (id:number) => async (dispatch:Dispatch) => {
    try {
        dispatch({ type: actionType.STARTDELETETASK });

        await axios.delete(`${baseUrl}/task/${id}`);

        dispatch({
            type: actionType.SUCCESSDELETETASK,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: actionType.FAILDELETETASK,
            error: e
        });
    }
};
