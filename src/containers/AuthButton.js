import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as Auth0 from "auth0-js";
import {login, logout} from '../actions/auth';
import '../style/AuthButton.css';

const auth0 = new Auth0.WebAuth({
	domain: 'bogyo.eu.auth0.com',
	clientID: 'RcpCexJdSRUquVU1vln6G4YM67f8c0OH',
	redirectUri: 'http://localhost:3000/callback',
	audience: 'https://bogyo.eu.auth0.com/userinfo',
	responseType: 'token id_token',
	scope: 'openid'
})

class AuthButton extends PureComponent {
	handleClickLogin = () => {
		this.props.login(auth0);
	}

	handleClickLogout = () => {
		this.props.logout();
	}

	render() {
		return (
			<div>
				{
					!this.props.isAuthenticated && <div className="AuthButton">
							<span>You are not logged in.</span>
							<button className="" onClick={this.handleClickLogin}>Log in</button>
						</div>
				}
				{
					this.props.isAuthenticated && <div className="AuthButton">
							<span>Welcome, user</span>
							<button onClick={this.handleClickLogout}>Log out</button>
						</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	const {auth} = state;
	const {isAuthenticated, isFetching} = auth;

	return {isAuthenticated, isFetching};
}

const mapDispatchToProps = dispatch => {
	return {
		login: auth => {
			dispatch(login(auth));
		},
		logout: () => {
			dispatch(logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
