export const period = 300; // can be changed this way if somebody would like

export const config = {
	API: {
		protocol: 'https:',
		host: 'poloniex.com',
		pathname: 'public',
		search: 'command=returnChartData'
	}
};

export const dropdownValues = [
	{
		value: 'LSK',
		label: 'LISK(LSK)'
	}, {
		value: 'ETH',
		label: 'Etherium(ETH)'
	}, {
		value: 'XMR',
		label: 'Monero(XMR)'
	}, {
		value: 'STRAT',
		label: 'Stratis(STRAT)'
	}, {
		value: 'BCH',
		label: 'Bitcoin Cash(BCH)'
	}
];
