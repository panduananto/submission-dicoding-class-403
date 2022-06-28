import React, { Component, createRef } from 'react';

import { HiCheckCircle } from 'react-icons/hi';

import SearchInput from './SearchInput';
import ToggleLayout from './ToggleLayout/ToggleLayout';
import ToggleDarkTheme from './ToggleDarkTheme/ToggleDarkTheme';

export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.navBarRef = createRef();

		this.onHandleScroll = this.onHandleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onHandleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onHandleScroll);
	}

	onHandleScroll() {
		if (window.scrollY > 20) {
			this.navBarRef.current.classList.add('shadow');
		} else {
			this.navBarRef.current.classList.remove('shadow');
		}
	}
	render() {
		return (
			<nav
				ref={this.navBarRef}
				className="fixed inset-x-0 top-0 z-10 border-b border-slate-300 bg-white transition-[box-shadow] duration-200 ease-in-out dark:border-slate-600 dark:bg-slate-800"
			>
				<div className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 py-4 px-6">
					<div className="flex items-center space-x-2">
						<span>
							<HiCheckCircle className="h-10 w-10 text-blue-700"></HiCheckCircle>
						</span>
						<span className="font-rubik text-xl font-medium text-slate-900 dark:text-white">Notenote</span>
					</div>
					<div className="flex items-center space-x-4">
						<SearchInput
							searchTerm={this.props.searchTerm}
							onSearchTermChangeHandler={this.props.onSearchTermChangeHandler}
							onClearSearchTermHandler={this.props.onClearSearchTermHandler}
						></SearchInput>
						<div className="flex items-center space-x-2">
							<ToggleLayout
								gridLayout={this.props.gridLayout}
								onChangeLayoutHandler={this.props.onChangeLayoutHandler}
							></ToggleLayout>
							<ToggleDarkTheme
								darkMode={this.props.darkMode}
								onChangeDarkThemeHandler={this.props.onChangeDarkThemeHandler}
							></ToggleDarkTheme>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
