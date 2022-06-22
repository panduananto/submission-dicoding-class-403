import React, { Component, Fragment } from 'react';

import { IconContext } from 'react-icons';
import { HiCheckCircle } from 'react-icons/hi';
import { MdOutlineDarkMode, MdOutlineGridView, MdOutlineViewAgenda, MdOutlineWbSunny } from 'react-icons/md';

import SearchInput from './SearchInput';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="fixed inset-x-0 top-0 z-10 border-b border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800">
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
						<IconContext.Provider
							value={{
								className: 'h-5 w-5 text-slate-900 transition-colors duration-200 ease-in-out dark:text-slate-400',
							}}
						>
							<div className="flex items-center space-x-2">
								<Fragment>
									<button
										type="button"
										onClick={this.props.onChangeLayoutHandler}
										className="group inline-flex items-center rounded-lg p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									>
										{this.props.gridLayout ? (
											<MdOutlineGridView></MdOutlineGridView>
										) : (
											<MdOutlineViewAgenda></MdOutlineViewAgenda>
										)}
									</button>
								</Fragment>
								<Fragment>
									<button
										type="button"
										onClick={this.props.onChangeDarkThemeHandler}
										className="group inline-flex items-center rounded-lg p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									>
										{this.props.darkMode ? (
											<MdOutlineDarkMode></MdOutlineDarkMode>
										) : (
											<MdOutlineWbSunny></MdOutlineWbSunny>
										)}
									</button>
								</Fragment>
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</nav>
		);
	}
}
