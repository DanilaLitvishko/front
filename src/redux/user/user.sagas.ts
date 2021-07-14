import {takeLatest, put, all, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import UserActionTypes from './user.types'

import {signUpSuccess, signUpFailure, confirmEmailSuccess, confirmEmailFailure, resendEmailSuccess, resendEmailFailure, loginSuccess, loginFailure} from './user.actions'
import {UserPayload} from '../../interfaces/user-payload.interface'
import { UserResponse } from '../../interfaces/user-response.interface'
import { ConfirmEmail } from '../../interfaces/confirm-email.interface'
import { SignUpSaga } from '../../interfaces/signup-saga.interface'
import { ConfirmEmailSaga } from '../../interfaces/confirm-email-saga.interface'
import { UserCredentials } from '../../interfaces/user-credentials.interface'
import { LoginSaga } from '../../interfaces/login-saga.interface'
import { LoginResponse } from '../../interfaces/login-response.interface'
import {sendUserInfoFailure, sendUserInfoSuccess} from './user.actions'
import { UserInfo } from '../../interfaces/userInfo.interface'

export function* singUp(signUpAction: SignUpSaga){
    try{
<<<<<<< HEAD
        const {payload:{email, password}} = signUpAction;
        const username:string = email;
        const {user}:UserCredentials = yield axios.post('http://localhost:3001/auth/signup', {username, password});
        yield put(signUpSuccess({user}));
=======
        const {email, password} = yield payload;
        const username:string = yield email;
        const {user}:{user:UserResponse} = yield axios.post('http://localhost:3001/auth/signup', {username, password});
        yield put(signUpSuccess(user));
>>>>>>> added sending user info
    }catch(error){
        yield put(signUpFailure(error));
    }
}

export function* confirmEmail(confirmEmailAction: ConfirmEmailSaga){
    try{
<<<<<<< HEAD
        const {payload:{confirmationCode}} = confirmEmailAction;
        const {user}:UserResponse = yield axios.get(`http://localhost:3001/confirm-registration/${confirmationCode}`);
        yield put(confirmEmailSuccess({user}));
=======
        const {user}:{user:UserResponse} = yield axios.get(`http://localhost:3001/confirm-registration/${payload}`);
        yield put(confirmEmailSuccess(user));
>>>>>>> added sending user info
    }catch(error){
        yield put(confirmEmailFailure(error));
    }
}

export function* resendEmail(confirmEmailAction: ConfirmEmailSaga){
    try{
<<<<<<< HEAD
        yield axios.get(`http://localhost:3001/confirm-registration/resend-email/${confirmEmailAction.payload}`)
        put(resendEmailSuccess())
    }catch(error){
        put(resendEmailFailure(error))
    }
}

export function* login(login: LoginSaga){
    try{
        const {email, password} = login.payload;
        const username:string = email;
        const {user}:LoginResponse = yield axios.post('http://localhost:3001/auth/signin', {username, password})
        yield put(loginSuccess({user}))
    }catch(error){
        yield put(loginFailure(error))
    }
=======
        yield axios.get(`http://localhost:3001/confirm-registration/resend-email/${payload}`);
    }catch(error){}
>>>>>>> added sending user info
}

export function* login({type, payload}:{type: typeof UserActionTypes.SIGN_UP_START, payload:UserPayload}){
    try{
        const {email, password} = yield payload;
        const username:string = yield email;
        const {data}: {data:UserResponse} = yield axios.post('http://localhost:3001/auth/signin', {username, password});
        yield axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}` ;
        yield put(loginSuccess(data.accessToken));
    }catch(error){
        yield put(loginFailure(error));
    }
}

export function* sendUserInfo({type, payload}:{type: typeof UserActionTypes.SEND_USER_INFO_START, payload:UserInfo}){
    try{
        const { bodyParameters } = yield payload;
        const { data } = yield axios.post('http://localhost:3001/user-info', bodyParameters);
        yield put(sendUserInfoSuccess(data));
    }catch(error){
        yield put(sendUserInfoFailure(error));
    }
}

export function* onSingUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, singUp)
}

export function* onConfirmEmail(){
    yield takeEvery(UserActionTypes.CONFIRM_EMAIL, confirmEmail)
}

export function* onResendEmail(){
    yield takeLatest(UserActionTypes.RESEND_EMAIL, resendEmail)
}

export function* onLogin(){
    yield takeLatest(UserActionTypes.LOGIN, login)
}

export function* onSendUserInfo(){
    yield takeLatest(UserActionTypes.SEND_USER_INFO_START, sendUserInfo)
}

export function* userSagas(){
    yield all([
        call(onSingUpStart),
        call(onConfirmEmail),
        call(onResendEmail),
        call(onLogin),
        call(onSendUserInfo)
    ])
}