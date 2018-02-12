import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newCurrency, fetchThreshold} from '../actions';
import ThresholdInput from '../components/ThresholdInput';
import ThresholdDropDown from '../components/ThresholdDropdown';
import ThresholdTable from '../components/ThresholdTable';
import {dropdownValues} from '../utils/constants.js';
import {financial} from '../utils/utils.js';
import '../style/Evaluator.css';

class Evaluator extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			filter: 0
		}
	}
	componentWillMount() {
		this.props.fetchThreshold();
	}

	compontentDidMount() {
		this.setState({data: this.props.threshold});
	}

	filterThreshold = (filter) => {
		this.setState({filter});
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {data, filter} = this.state;

		const filterData = financial(nextState.filter);
		const currentFilterData = financial(filter);

		if (nextState.filter && filterData !== currentFilterData) {
			const overThreshold = data.filter(item => {
				const diff = (financial(item.high)) - (financial(item.low));
				return (financial(diff) >= filterData);
			})
			this.setState({data: overThreshold});
		}

		if (nextProps.threshold.items !== this.state.data) {
			this.setState({data: nextProps.threshold.items});
		}
		return true;
	}

	render() {
		const { isFetching } = this.props.threshold;
		return (
			<div className="Evaluator">
				<section className="EvaluatorTitleSection">
					<h2>Cryptocurrency Threshold Evaluator</h2>
					<h3>past 24hrs</h3>
				</section>
				<section className="EvaluatorSection">
					<div className="EvaluatorSectionItems">
						<ThresholdDropDown data={dropdownValues} setCurrency={this.props.setCurrency} />
					</div>
					<div className="EvaluatorSectionItems">
						<ThresholdInput filterThreshold={this.filterThreshold} />
					</div>
				</section>
				<section>
					{
						isFetching && <div className="message">
								<span>Loading...</span>
								<div className="loader" />
							</div>
					}
					{!isFetching && <ThresholdTable data={this.state.data} />}
				</section>
			</div>
		)
	}
};

const mapStateToProps = state => {
	const {threshold} = state;
	return {threshold};
}

const mapDispatchToProps = dispatch => {
	return {
		setCurrency: (currency) => {
			dispatch(newCurrency(currency));
		},
		fetchThreshold: () => {
			dispatch(fetchThreshold());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Evaluator);
