import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS} from '../actions/actionTypes';

// we would also want a util to check if the token is expired.
export default function Auth(state = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('id_token')
	//:TODO check if the token expired
		? true
		: false
}, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isFetching: false,
				isAuthenticated: true
			}
		case LOGOUT_REQUEST:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false
			}
		case LOGOUT_SUCCESS:
			return {
				...state,
				isFetching: false,
				isAuthenticated: false
			}
		default:
			return state
	}
}
