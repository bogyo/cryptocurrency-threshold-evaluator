import {REQUEST_THRESHOLD, RECEIVE_THRESHOLD, SET_CURRENCY} from './actionTypes.js';
import {createUrl} from '../utils/utils.js';

const requestThreshold = () => ({type: REQUEST_THRESHOLD});
const receiveTrehold = json => ({type: RECEIVE_THRESHOLD, payload: json});
const setCurrency = currency => ({type: SET_CURRENCY, payload: currency});

const fetchFromApi = currency => {
	const endpoint = createUrl(currency);
	return fetch(endpoint);
}

export const newCurrency = currency => {
	return(dispatch, getState) => {
		dispatch(setCurrency(currency));
		dispatch(fetchThreshold());
	}
};

export const fetchThreshold = () => {
	return(dispatch, getState) => {
		dispatch(requestThreshold());
		return fetchFromApi(getState().threshold.currency).then(
			response => response.json(),
			error => console.log('An error occured.', error)
		).then(json => {
			// update the app state with the results of the API call.
			dispatch(receiveTrehold(json));
		}).catch(error => console.log(error))
	}
};
