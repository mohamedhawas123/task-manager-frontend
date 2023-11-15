import { Dispatch } from "redux";
import * as actionType from './actionType'
import axios from "axios";


const baseUrl = "http://localhost:3000"

export const loginUser = (username:string, password:string) => async (dispatch:Dispatch) => {
    try {
        dispatch({ type: actionType.STARTLOGINUSER });


        const response = await axios.post(`${baseUrl}/auth/login`, {
            username:username,
            password:password
        
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );

        console.log(response)

        dispatch({
            type: actionType.SUCCESSLOGINUSER,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: actionType.FAILLOGINUSER,
            error: e
        });
        console.log(e)
    }
};


export const signUpUser = (name:string, username:string, password:string) => async (dispatch:Dispatch) => {
    try {
        dispatch({ type: actionType.STARTSIGNUPUSER });


        const response = await axios.post(`${baseUrl}/auth/signup`, {
            name: name,
            username:username,
            password:password
        
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );

        console.log(response)

        dispatch({
            type: actionType.SUCCESSIGNUPUSER,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: actionType.FAILSIGNUPUSER,
            error: e
        });
        console.log(e)
    }
};