import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<img src="/src/images/Logo.png" className="App-logo" alt="logo" />
					<h1 className="App-title">Wookiee Serenade</h1>
				</header>
			</div>
		);
	}
}

export default Header;
