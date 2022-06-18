import React, { Component } from 'react';

export default class TabsButton extends Component {
	render() {
		return (
			<span
				tabIndex="0"
				onClick={() => this.props.onClickActiveTab(this.props.label)}
				className={`${
					this.props.label === this.props.activeTab ? 'border-b-2 border-blue-700 text-blue-700' : 'hover:text-blue-700'
				} inline-flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-semibold capitalize focus-visible:rounded-lg focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700`}
			>
				{this.props.label === 'catatan' ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
						/>
					</svg>
				)}
				{this.props.label}
			</span>
		);
	}
}
