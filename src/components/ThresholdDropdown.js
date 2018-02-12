import React, {PureComponent} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../style/ThresholdDropDown.css';

export default class ThresholdDropDown extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: this.props.data[0]
		}
	}

	handleDropDownChange = (selectedOption) => {
		this.setState({
			selectedOption
		}, () => {
			this.props.setCurrency(selectedOption.value);
		});
	}
	render() {
		return (
			<div className="ThresholdDropDown">
				<label htmlFor="select">Choose a cryptocurreny</label>
				<Select
					className="Select"
					value={this.state.selectedOption}
					onChange={this.handleDropDownChange}
					options={this.props.data}
					clearable={false} />
			</div>
		)
	}
}
