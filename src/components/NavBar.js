import React, { Component } from 'react';

import { HiCheckCircle } from 'react-icons/hi';

import SearchInput from './SearchInput';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="fixed inset-x-0 top-0 z-10 border-b border-slate-300 bg-white">
				<div className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 py-4 px-6">
					<div className="flex items-center space-x-2">
						<span>
							<HiCheckCircle className="h-10 w-10 text-blue-700"></HiCheckCircle>
						</span>
						<span className="font-rubik text-xl font-medium text-slate-900">Notenote</span>
					</div>
					<SearchInput
						searchTerm={this.props.searchTerm}
						onSearchTermChangeHandler={this.props.onSearchTermChangeHandler}
						onClearSearchTermHandler={this.props.onClearSearchTermHandler}
					></SearchInput>
				</div>
			</nav>
		);
	}
}
