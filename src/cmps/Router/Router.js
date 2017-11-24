import React, { Component } from 'react';
import Header from "../Header/Header";
import WsSidebar from "../WsSidebar/WsSidebar";

class Router extends Component {
	constructor(props) {
		super(props);


	}
	render() {
		return (
			<div>
				<WsSidebar/>
				<Header/>
			</div>
		);
	}
}

export default Router;