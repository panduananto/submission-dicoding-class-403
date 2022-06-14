import React, { Component } from 'react';

export default class SearchInput extends Component {
	render() {
		return (
			<form className="ml-auto block w-96">
				<label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-white ">
					Search
				</label>
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							class="h-5 w-5 text-gray-500 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						type="text"
						id="search"
						autoComplete="off"
						placeholder="Cari catatanmu di sini..."
						className="block w-full rounded-lg border border-slate-300 bg-gray-50 p-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-lime-500 focus:outline-none focus:ring-lime-500"
					/>
				</div>
			</form>
		);
	}
}
