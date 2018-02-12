import React, {PureComponent} from 'react';
import '../style/ThresholdInput.css';

export default class ThresholdInput extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showError: false,
			val: ''
		}
	}

	handleInputChange = (e) => {
		const val = e.target.value;

		if (val && isNaN(val)) {
			return this.setState({showError: true});
		}

		if (!val || !isNaN(val)) {
			const newValue = val ? val : '';

			this.setState({
				val: newValue,
				showError: false
			}, () => {
				setTimeout(() => {
					this.props.filterThreshold(this.state.val);
				}, 500)
			})
		}
	}

	render() {
		const {val, showError} = this.state;
		return (
			<div className="ThresholdInput">
				<label htmlFor="threshold">Enter threshold</label>
				<input
					className="input"
					type="text"
					name="threshold"
					placeholder={"BTC00,00"}
					value={val}
					onChange={this.handleInputChange} />
				{showError && <span className="ThresholdInputError">Please use only numbers</span>}
			</div>
		)
	}
}
