import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="flex items-center bg-purple-700 py-4 px-6">
				<div className="flex items-center space-x-1">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 text-[#AC94FA]"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<span className="font-rubik text-xl font-medium text-white">Notenote</span>
				</div>
			</nav>
		);
	}
}
