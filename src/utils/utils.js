import url from 'url';
import {config, period} from './constants';

const getTimeInterval = () => {
	const end = Math.floor(Date.now() / 1000);
	const oneDayTimeStamp = 1 * 24 * 60 * 60;
	const start = end - oneDayTimeStamp;

	return {start, end};
};

export const createUrl = (currency) => {
	const time = getTimeInterval();
	const search = `${config.API.search}&currencyPair=BTC_${currency}&start=${time.start}&end=${time.end}&period=${period}`;
	const urlParams = {
		protocol: config.API.protocol,
		slashes: true,
		host: config.API.host,
		pathname: config.API.pathname,
		search: search
	}
	return url.format(urlParams);
};

export const financial = (x) => {
	return Number.parseFloat(x).toFixed(20);
}

export const displayTime = (date) => {
	const dTime = new Date(date * 1000);
	const year = dTime.getFullYear();
	const days = dTime.getDate();
	const hours = dTime.getHours();
	let month = dTime.getMonth();
	let minutes = dTime.getMinutes();

	if (minutes < 10) {
		minutes = "0" + minutes
	}

	if (month < 10) {
		month = '0' + (
			parseInt(month, 10) + 1
		);
	} else {
		month = parseInt(month, 10) + 1;
	}

	const str = `${days}/${month}/${year} ${hours}:${minutes}`;
	return str;
};
