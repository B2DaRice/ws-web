import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<div className="header-background">
				</div>
				<header className="App-header">
					<img src="/images/Logo.png" className="ws-logo pull-left" alt="logo" />
					{/*<img src="/images/name_tag.png" className="name-tag"/>*/}
					<div className="lute-wookiee-container pull-right">
						<img src="/images/Wookiee.png" className="lute-wookiee" alt="mascot" />
					</div>
					<div className="nav-menu pull-right">

					</div>
				</header>
			</div>
		);
	}
}

export default Header;
