import React, { Component } from 'react';

import autoBindReact from 'auto-bind/react';

import NavBar from './components/NavBar';
import NoteApp from './components/NoteApp';
import Footer from './components/Footer';
import { isStorageExist, saveDataToLocalStorage } from './utils';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			theme: {
				gridLayout: true,
				darkMode: false,
			},
		};

		autoBindReact(this);
	}

	componentDidMount() {
		if (isStorageExist()) {
			this.loadThemeFromLocalStorage();
		}
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
		this.setState(
			(prevState) => {
				return {
					...prevState,
					theme: {
						...prevState.theme,
						gridLayout: !this.state.theme.gridLayout,
					},
				};
			},
			() => {
				saveDataToLocalStorage('NOTES_THEME', this.state.theme);
			}
		);
	}

	onChangeDarkThemeHandler() {
		document.documentElement.classList.toggle('dark');

		this.setState(
			(prevState) => {
				return {
					...prevState,
					theme: {
						...prevState.theme,
						darkMode: !this.state.theme.darkMode,
					},
				};
			},
			() => {
				saveDataToLocalStorage('NOTES_THEME', this.state.theme);
			}
		);
	}

	loadThemeFromLocalStorage() {
		const localStorageThemeData = localStorage.getItem('NOTES_THEME');
		let data = JSON.parse(localStorageThemeData);

		if (data !== null) {
			if (data.darkMode === true || window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}

			this.setState((prevState) => {
				return {
					...prevState,
					theme: data,
				};
			});
		}
	}

	render() {
		return (
			<div className="flex h-full flex-col bg-white dark:bg-slate-900">
				<NavBar
					searchTerm={this.state.searchTerm}
					onSearchTermChangeHandler={this.onSearchTermChangeHandler}
					onClearSearchTermHandler={this.onClearSearchTermHandler}
					gridLayout={this.state.theme.gridLayout}
					onChangeLayoutHandler={this.onChangeLayoutHandler}
					darkMode={this.state.theme.darkMode}
					onChangeDarkThemeHandler={this.onChangeDarkThemeHandler}
				></NavBar>
				<NoteApp searchTerm={this.state.searchTerm} gridLayout={this.state.theme.gridLayout}></NoteApp>
				<Footer></Footer>
			</div>
		);
	}
}
