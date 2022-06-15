import React, { Component } from 'react';

import SearchInput from './SearchInput';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="border-b border-slate-300 bg-white">
				<div className="mx-auto flex max-w-screen-xl items-center py-4 px-6">
					<div className="flex items-center space-x-2">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10 text-blue-700"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
						<span className="font-rubik text-xl font-medium text-slate-900">Notenote</span>
					</div>
					<SearchInput></SearchInput>
				</div>
			</nav>
		);
	}
}
