import React, { Component } from 'react';

import NavBar from './components/NavBar';
import NoteApp from './components/NoteApp';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
		};

		this.onSearchTermChangeHandler = this.onSearchTermChangeHandler.bind(this);
	}

	onSearchTermChangeHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				searchTerm: event.target.value,
			};
		});
	}

	render() {
		return (
			<div className="flex h-full flex-col">
				<NavBar searchTerm={this.state.searchTerm} onSearchTermChangeHandler={this.onSearchTermChangeHandler}></NavBar>
				<NoteApp searchTerm={this.state.searchTerm}></NoteApp>
				<Footer></Footer>
			</div>
		);
	}
}
