import qs from 'qs';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS} from './actionTypes';

const requestLogin = () => (
	{type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false}
);

const receiveLogin = () => (
	{type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true}
);

const requestLogout = () => (
	{type: LOGOUT_REQUEST, isFetching: true, isAuthenticated: true}
);

const receiveLogout = () => (
	{type: LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false}
);

const setSession = (authResult) => {
	localStorage.setItem('access_token', authResult.access_token);
	localStorage.setItem('id_token', authResult.id_token);
	localStorage.setItem('expires_at', JSON.stringify(
		(authResult.expires_in * 1000) + new Date().getTime()
	));
	// navigate to the route
	return function(dispatch) {
		dispatch(receiveLogin());
		window.history.replaceState({}, '', '/callback')
	}
};

export const handleAuthentication = (auth0) => {
	return dispatch => {
		if (auth0) {
			const authResult = qs.parse((auth0));
			authResult.access_token = authResult['#access_token'];
			if (authResult && authResult.access_token && authResult.id_token && authResult.expires_in) {
				dispatch(setSession(authResult))
			}
		}
	}
};

const removeSession = () => {
	localStorage.removeItem('id_token')
	localStorage.removeItem('access_token')
	localStorage.removeItem('expires_at')
	window.history.replaceState({}, '', '/')
	return dispatch => {
		dispatch(receiveLogout())
	}
};

export const login = (auth0) => {
	return dispatch => {
		dispatch(requestLogin());
		auth0.authorize();
	}
};

export const logout = () => {
	return dispatch => {
		dispatch(requestLogout())
		dispatch(removeSession())
	}
};
