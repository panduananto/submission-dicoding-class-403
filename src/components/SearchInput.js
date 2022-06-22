import React, { Component } from 'react';

import { IconContext } from 'react-icons';
import { MdOutlineSearch, MdCancel } from 'react-icons/md';

export default class SearchInput extends Component {
	render() {
		return (
			<IconContext.Provider value={{ className: 'h-5 w-5 text-gray-500 hover:text-gray-600 dark:text-gray-400' }}>
				<form className="w-full max-w-[384px]">
					<label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-slate-700">
						Search
					</label>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<MdOutlineSearch></MdOutlineSearch>
						</div>
						<input
							type="text"
							id="search"
							autoComplete="off"
							placeholder="Cari catatanmu dari judul..."
							value={this.props.searchTerm}
							onChange={this.props.onSearchTermChangeHandler}
							className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-600 dark:focus:ring-blue-600"
						/>
						{this.props.searchTerm && (
							<button
								type="button"
								onClick={this.props.onClearSearchTermHandler}
								className="absolute inset-y-0 right-0 flex items-center pr-3"
							>
								<MdCancel className="dark:hover:text-gray-300"></MdCancel>
							</button>
						)}
					</div>
				</form>
			</IconContext.Provider>
		);
	}
}
