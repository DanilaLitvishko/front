import { UserCredentials } from '../../interfaces/user-credentials.interface'
import { UserResponse } from '../../interfaces/user-response.interface'
import UserActionTypes from './user.types'

export const signUpStart = (userCredentials:UserCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = (user:UserResponse) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (error:string) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const confirmEmail = (confirmationCode:string) => ({
    type: UserActionTypes.CONFIRM_EMAIL,
    payload: confirmationCode
})

export const confirmEmailSuccess = (user:UserResponse) => ({
    type: UserActionTypes.CONFIRM_EMAIL_SUCCESS,
    payload: user
})

export const confirmEmailFailure = (error:string) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const resendEmail = (email:string) => ({
    type: UserActionTypes.RESEND_EMAIL,
    payload: email,
})