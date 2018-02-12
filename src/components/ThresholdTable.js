import React, {PureComponent} from 'react';
import {displayTime, /*financial*/} from '../utils/utils';
import '../style/ThresholdTable.css';

class ThresholdTable extends PureComponent {
	renderTable() {
		const thresholds = this.props.data;

		return thresholds.map((threshold, index) => {
			return <tr key={index}>
				{/*<td>
					<span>{index}</span>
					</td> */}
				<td>
					<span>{displayTime(threshold.date)}</span>
				</td>
				<td>
					<span>{threshold.high}</span>
				</td>
				<td>
					<span>{threshold.low}</span>
				</td>
				<td>
					<span>{threshold.volume}</span>
				</td>
				{/*<td>
					<span>{(financial(threshold.high) - financial(threshold.low)).toFixed(8)}</span>
					</td> */
				}
			</tr>;
		})
	}

	render() {
		const { data } = this.props;
		return (
			<div className="TreshHoldTable">
				{!data && <div className="message">Empty.</div>}
				{data.length === 0 && <div className="message">No data found above threshold</div>}
				{
					data && <table className="TreshHoldTableItem">
							<thead className="TreshHoldTableHeader">
								<tr>
									{/*<th>No</th>*/}
									<th>time(5m) interval</th>
									<th>high</th>
									<th>low</th>
									<th>volume</th>
									{/*<th>diff</th>*/}
								</tr>
							</thead>
							<tbody>
								{data.length > 0 && this.renderTable()}
							</tbody>
						</table>
				}
			</div>
		);
	}
}
export default ThresholdTable;
