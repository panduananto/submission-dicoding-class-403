import React, { Component } from 'react';

import NavBar from './components/NavBar';
import NoteApp from './components/NoteApp';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			gridLayout: true,
		};

		this.onSearchTermChangeHandler = this.onSearchTermChangeHandler.bind(this);
		this.onClearSearchTermHandler = this.onClearSearchTermHandler.bind(this);
		this.onChangeLayoutHandler = this.onChangeLayoutHandler.bind(this);
	}

	onSearchTermChangeHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				searchTerm: event.target.value,
			};
		});
	}

	onClearSearchTermHandler() {
		this.setState((prevState) => {
			return {
				...prevState,
				searchTerm: '',
			};
		});
	}

	onChangeLayoutHandler() {
		this.setState((prevState) => {
			return {
				...prevState,
				gridLayout: !this.state.gridLayout,
			};
		});
	}

	render() {
		return (
			<div className="flex h-full flex-col">
				<NavBar
					searchTerm={this.state.searchTerm}
					onSearchTermChangeHandler={this.onSearchTermChangeHandler}
					onClearSearchTermHandler={this.onClearSearchTermHandler}
					gridLayout={this.state.gridLayout}
					onChangeLayoutHandler={this.onChangeLayoutHandler}
				></NavBar>
				<NoteApp searchTerm={this.state.searchTerm} gridLayout={this.state.gridLayout}></NoteApp>
				<Footer></Footer>
			</div>
		);
	}
}
