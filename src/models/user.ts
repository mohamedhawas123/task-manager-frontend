import * as actionTypes from '../store/action/actionType'

export interface User {
    email: string;
    username: string;
    id: string;
    token: string;
}

export interface userState {
    user: User | null;
    error: Error | null;
    loading: boolean;
    success: boolean;
}


export interface StartLoginUserAction {
    type: typeof actionTypes.STARTLOGINUSER;
}

export interface SuccessLoginUserAction {
    type: typeof actionTypes.SUCCESSLOGINUSER;
    payload: User; 
}

export interface FailLoginUserAction {
    type: typeof actionTypes.FAILLOGINUSER;
    error: Error;
}

export interface StartSignUpUserAction {
    type: typeof actionTypes.STARTSIGNUPUSER;
}

export interface SuccessSignUpUserAction {
    type: typeof actionTypes.SUCCESSIGNUPUSER;
    payload: User; 
}

export interface FailSignUpUserAction {
    type: typeof actionTypes.FAILSIGNUPUSER;
    error: Error;
}
