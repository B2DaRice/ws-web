import React, { Component } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<div className="header-background">
				</div>
				<header className="App-header">
					<img src="/images/Logo.png" className="ws-logo pull-left" alt="logo" />
					<div className="nav-menu pull-right">
						<Menu>
							<MenuItem label="Gallery">gallery</MenuItem>
						</Menu>

					</div>
					<img src="/images/Wookiee_large.png" className="lute-wookiee pull-right" alt="mascot" />
				</header>
			</div>
		);
	}
}

export default Header;
