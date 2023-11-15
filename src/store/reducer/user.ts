import { 
    userState,
    StartLoginUserAction,
    SuccessLoginUserAction,
    FailLoginUserAction,
    StartSignUpUserAction,
    SuccessSignUpUserAction,
    FailSignUpUserAction,

} from '../../models/user';
import * as actionTypes from '../action/actionType'



const initialState:userState = {
    user : null,
    error: null,
    loading: false,
    success: false
}

type Action = 
| StartLoginUserAction
    | SuccessLoginUserAction
    | StartSignUpUserAction
    | FailLoginUserAction
    | FailSignUpUserAction
    |SuccessSignUpUserAction
   

;


const reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case actionTypes.STARTLOGINUSER:
        case actionTypes.STARTSIGNUPUSER:
            return { ...state, loading: true, error: null };

        case actionTypes.SUCCESSLOGINUSER:
            return { ...state, loading: false, user: action.payload, error: null, success: true };

        case actionTypes.SUCCESSIGNUPUSER:
            return { ...state, loading: false, user: action.payload, error: null, success: true };

        case actionTypes.FAILLOGINUSER:
        case actionTypes.FAILSIGNUPUSER:
            return { ...state, loading: false, error: action.error };

       

        default:
            return state;
    }
}

export default reducer;