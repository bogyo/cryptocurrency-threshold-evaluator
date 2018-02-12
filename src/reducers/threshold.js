import {REQUEST_THRESHOLD, RECEIVE_THRESHOLD, SET_CURRENCY} from '../actions/actionTypes.js';
import {dropdownValues} from '../utils/constants';

function Threshold(state = {
	isFetching: false,
	items: [],
	currency: dropdownValues[0].value
}, action) {
	switch (action.type) {
		case REQUEST_THRESHOLD:
			return {
				...state,
				isFetching: true
			}
		case RECEIVE_THRESHOLD:
			return {
				...state,
				isFetching: false,
				items: action.payload
			}
		case SET_CURRENCY:
			return {
				...state,
				currency: action.payload
			}
		default:
			return state
	}
}

export default Threshold;
