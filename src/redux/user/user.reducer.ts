import { Action } from '../../interfaces/action.interface'
import UserActionTypes from './user.types'

const INITIAL_STATE:{currentUser:string | null, error: string | null} = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch(action.type){
        case UserActionTypes.CONFIRM_EMAIL:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer