import React, {PureComponent} from 'react';
import {Route, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {handleAuthentication} from '../actions/auth';
import Evaluator from './Evaluator.js';

class PrivateRoute extends PureComponent {
	componentDidMount() {
		this.handleAuthentication(this.props.route);
	}

	handleAuthentication = (nextState, replace) => {
		if (nextState) {
			if (/access_token|id_token|error/.test(nextState.location.hash)) {
				return this.props.handleAuthentication(nextState.location.hash);
			}
		}
	}

	render() {
		return (
			<div>
				{this.props.isAuthenticated && <Route component={Evaluator} />}
			</div>
		)
	}
}

const mapStateToProps = state => {
	const {auth} = state;
	const {isAuthenticated} = auth;

	return {isAuthenticated}
};

const mapDispatchToProps = dispatch => {
	return {
		handleAuthentication: oauth => {
			dispatch(handleAuthentication(oauth));
		}
	}
};

const VisiblePrivateRoute = withRouter(
	connect(mapStateToProps, mapDispatchToProps)(
		PrivateRoute
	)
);

export default VisiblePrivateRoute;
