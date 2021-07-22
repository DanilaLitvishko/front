import { Action } from '../../interfaces/action.interface'
import { InitialState } from '../../interfaces/initial-state.interface'
import UserActionTypes from './user.types'

const INITIAL_STATE:InitialState = {
    currentUser: null,
    error: null,
    loading: false,
    userInfo: null,
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch(action.type){
        case UserActionTypes.LOGIN:
        case UserActionTypes.FETCH_USER_INFO_START:
        case UserActionTypes.SIGN_UP_START:
            return{
                ...state,
                error: null,
                loading: true,
            }
        case UserActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case UserActionTypes.CONFIRM_EMAIL:
        case UserActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case UserActionTypes.FETCH_USER_INFO_SUCCESS:
            return{
                ...state,
                userInfo: action.payload,
                loading: false
            }
        case UserActionTypes.FETCH_USER_INFO_FAILURE:
        case UserActionTypes.SEND_USER_INFO_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default userReducer