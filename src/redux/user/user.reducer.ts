import { Action } from '../../interfaces/action.interface'
import UserActionTypes from './user.types'

const INITIAL_STATE:{currentUser:string | null, error: string | null, loading: boolean} = {
    currentUser: null,
    error: null,
    loading: false,
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch(action.type){
        case UserActionTypes.SIGN_UP_START:
            return{
                ...state,
                loading:true,
            }
        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.CONFIRM_EMAIL:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default userReducer