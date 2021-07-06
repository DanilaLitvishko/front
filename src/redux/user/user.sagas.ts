import {takeLatest, put, all, call, takeEvery} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'

import UserActionTypes from './user.types'

import {signUpSuccess, signUpFailure, confirmEmailSuccess, confirmEmailFailure} from './user.actions'
import {UserPayload} from '../../interfaces/user-payload.interface'
import { UserResponse } from '../../interfaces/user-response.interface'
import { ConfirmEmail } from '../../interfaces/confirm-email.interface'

export function* singUp({type, payload}:{type: typeof UserActionTypes.SIGN_UP_START, payload:UserPayload}){
    try{
        const {email, password} = yield payload;
        const username:string = yield email;
        const {user}:{user:UserResponse} = yield axios.post('http://localhost:3001/auth/signup', {username, password})
        yield put(signUpSuccess(user))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* confirmEmail({type, payload}:{type: typeof UserActionTypes.CONFIRM_EMAIL, payload:ConfirmEmail}){
    try{
        const {confirmationCode}:{confirmationCode:string} = yield payload;
        const {user}:{user:UserResponse} = yield axios.get(`http://localhost:3001/confirm-registration/${confirmationCode}`)
        yield put(confirmEmailSuccess(user))
    }catch(error){
        yield put(confirmEmailFailure(error))
    }
}

export function* onSingUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, singUp)
}

export function* onConfirmEmail(){
    yield takeEvery(UserActionTypes.CONFIRM_EMAIL, confirmEmail)
}

export function* userSagas(){
    yield all([
        call(onSingUpStart),
        call(onConfirmEmail),
    ])
}