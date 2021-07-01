import {takeLatest, put, all, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

import UserActionTypes from './user.types'

import {signUpSuccess, signUpFailure, confirmEmailSuccess, confirmEmailFailure} from './user.actions'

export function* singUp({payload:{email, password}}){
    try{
        const username = yield email;
        const data = yield axios.post('http://localhost:3001/auth/signup', {username, password})
        yield put(signUpSuccess(data.user))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* confirmEmail({payload: confirmationCode}){
    try{
        const data = yield axios.get(`http://localhost:3001/confirm-registration/${confirmationCode}`)
        yield put(confirmEmailSuccess(data.user))
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