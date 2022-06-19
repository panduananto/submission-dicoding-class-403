import React, { Component } from 'react';

import { MdOutlineSearch } from 'react-icons/md';

export default class SearchInput extends Component {
	render() {
		return (
			<form className="ml-auto block w-96">
				<label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-slate-700">
					Search
				</label>
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MdOutlineSearch className="h-5 w-5 text-gray-500 dark:text-gray-400"></MdOutlineSearch>
					</div>
					<input
						type="text"
						id="search"
						autoComplete="off"
						placeholder="Cari catatanmu di sini..."
						className="block w-full rounded-lg border border-slate-300 bg-gray-50 p-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-blue-700"
					/>
				</div>
			</form>
		);
	}
}
