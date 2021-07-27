const UserActionTypes = {
	SIGN_UP_START: '@@user/SIGN_UP_START',
	SIGN_UP_SUCCESS: '@@user/SIGN_UP_SUCCESS',
	SIGN_UP_FAILURE: '@@user/SIGN_UP_FAILURE',
	RESEND_EMAIL: '@@user/RESEND_EMAIL',
	RESEND_EMAIL_SUCCESS: '@@user/RESEND_EMAIL_SUCCESS',
	RESEND_EMAIL_FAILURE: '@@user/RESEND_EMAIL_FAILURE',
	CONFIRM_EMAIL:'@@user/CONFIRM_EMAIL',
	CONFIRM_EMAIL_SUCCESS: '@@user/CONFIRM_EMAIL_SUCCESS',
	CONFIRM_EMAIL_FAILURE: '@@user/CONFIRM_EMAIL_FAILURE',
	ADD_USER_INFO: '@@user/ADD_USER_INFO',
	LOGIN: '@@user/LOGIN',
	LOGIN_SUCCESS: '@@user/LOGIN_SUCCESS',
	LOGIN_FAILURE: '@@user/LOGIN_FAILURE',
	SEND_USER_INFO_START: '@@user/SEND_USER_INFO_START',
	SEND_USER_INFO_SUCCESS: '@@user/SEND_USER_INFO_SUCCESS',
	SEND_USER_INFO_FAILURE: '@@user/SEND_USER_INFO_FAILURE',
	FETCH_USER_INFO_START: '@@user/FETCH_USER_INFO_START',
	FETCH_USER_INFO_SUCCESS: '@@user/FETCH_USER_INFO_SUCCESS',
	FETCH_USER_INFO_FAILURE:'@@user/FETCH_USER_INFO_FAILURE',
	EDIT_USER_SPECIALITIES_START: '@@user/EDIT_USER_SPECIALITIES_START',
	EDIT_USER_SPECIALITIES_SUCCESS: '@@user/EDIT_USER_SPECIALITIES_SUCCESS',
	EDIT_USER_SPECIALITIES_FAILURE: '@@user/EDIT_USER_SPECIALITIES_FAILURE',
};

export default UserActionTypes;