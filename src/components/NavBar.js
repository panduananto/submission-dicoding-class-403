import React, { Component, Fragment } from 'react';

import ReactTooltip from 'react-tooltip';
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
										className="group inline-flex items-center rounded-lg text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									>
										{this.props.gridLayout ? (
											<span data-tip="Grid view" data-for="gridView" className="p-2.5">
												<MdOutlineGridView></MdOutlineGridView>
												<ReactTooltip
													id="gridView"
													place="bottom"
													effect="solid"
													className="!bg-slate-700 !py-1 !px-2"
													arrowColor="rgb(51, 65, 85)"
													delayShow={200}
												></ReactTooltip>
											</span>
										) : (
											<span data-tip="List view" data-for="listView" className="p-2.5">
												<MdOutlineViewAgenda></MdOutlineViewAgenda>
												<ReactTooltip
													id="listView"
													place="bottom"
													effect="solid"
													className="!bg-slate-700 !py-1 !px-2"
													arrowColor="rgb(51, 65, 85)"
													delayShow={200}
												></ReactTooltip>
											</span>
										)}
									</button>
								</Fragment>
								<Fragment>
									<button
										type="button"
										onClick={this.props.onChangeDarkThemeHandler}
										className="group inline-flex items-center rounded-lg text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									>
										{this.props.darkMode ? (
											<div data-tip="Dark mode" data-for="darkMode" className="p-2.5">
												<MdOutlineDarkMode></MdOutlineDarkMode>
												<ReactTooltip
													id="darkMode"
													place="bottom"
													effect="solid"
													className="!bg-slate-700 !py-1 !px-2"
													arrowColor="rgb(51, 65, 85)"
													delayShow={200}
												></ReactTooltip>
											</div>
										) : (
											<div data-tip="Light mode" data-for="lightMode" className="p-2.5">
												<MdOutlineWbSunny></MdOutlineWbSunny>
												<ReactTooltip
													id="lightMode"
													place="bottom"
													effect="solid"
													className="!bg-slate-700 !py-1 !px-2"
													arrowColor="rgb(51, 65, 85)"
													delayShow={200}
												></ReactTooltip>
											</div>
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
