import { LoginResponse } from '../../interfaces/login-response.interface'
import { UserCredentials } from '../../interfaces/user-credentials.interface'
import { UserPayload } from '../../interfaces/user-payload.interface'
import { UserInfo } from '../../interfaces/user-info.interface'
import UserActionTypes from './user.types'
import { AxiosError } from 'axios'

export const signUpStart = (userCredentials:UserPayload) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials,
})

export const signUpSuccess = ({user}:UserCredentials) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user,
})

export const signUpFailure = (error:Error | AxiosError) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
})

export const confirmEmail = (confirmationCode:string) => ({
    type: UserActionTypes.CONFIRM_EMAIL,
    payload: confirmationCode
})

export const confirmEmailSuccess = ({user}:UserCredentials) => ({
    type: UserActionTypes.CONFIRM_EMAIL_SUCCESS,
    payload: user
})

export const confirmEmailFailure = (error:Error | AxiosError) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const resendEmail = (email:string) => ({
    type: UserActionTypes.RESEND_EMAIL,
    payload: email,
})

export const resendEmailSuccess = () => ({
    type: UserActionTypes.RESEND_EMAIL_SUCCESS,
})

export const resendEmailFailure = (error:Error | AxiosError) => ({
    type: UserActionTypes.RESEND_EMAIL_FAILURE,
    payload: error
})
export const login = (userCredentials:UserPayload) => ({
    type: UserActionTypes.LOGIN,
    payload: userCredentials
})

export const loginSuccess = ({data}:LoginResponse) => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: data.accessToken
})

export const loginFailure = (error:Error | AxiosError) => ({
    type: UserActionTypes.LOGIN_FAILURE,
    payload: error
})

export const sendUserInfo = (userInfo: UserInfo) => ({
    type: UserActionTypes.SEND_USER_INFO_START,
    payload:userInfo
})

export const sendUserInfoSuccess = (userInfo:UserInfo) => ({
    type: UserActionTypes.SEND_USER_INFO_SUCCESS,
    payload: userInfo
})

export const sendUserInfoFailure = (error:Error | AxiosError) => ({
    type: UserActionTypes.SEND_USER_INFO_FAILURE,
    payload: error
})