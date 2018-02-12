import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthButton from './containers/AuthButton';
import PrivateRoute from './containers/PrivateRoute';
import './style/App.css';

export const App = () => (
	<Router>
		<div className="App">
			<AuthButton />
			<Route
				path="/callback"
				render={props => {
					return <PrivateRoute route={props} />
				}}/>
		</div>
	</Router>
);

export default App;
