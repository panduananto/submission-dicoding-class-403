import React, { Component } from 'react';

import { MdOutlineArchive, MdOutlineNote } from 'react-icons/md';

export default class TabsButton extends Component {
	render() {
		return (
			<span
				tabIndex="0"
				onClick={() => this.props.onClickActiveTab(this.props.label)}
				className={`${
					this.props.label === this.props.activeTab
						? 'border-b-2 border-blue-700 text-blue-700 dark:border-blue-600 dark:text-blue-600'
						: 'text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-600'
				} inline-flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-semibold capitalize focus-visible:rounded-lg focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:focus-visible:border-transparent dark:focus-visible:ring-blue-600`}
			>
				{this.props.label === 'catatan' ? (
					<MdOutlineNote className="h-6 w-6"></MdOutlineNote>
				) : (
					<MdOutlineArchive className="h-6 w-6"></MdOutlineArchive>
				)}
				{this.props.label}
			</span>
		);
	}
}
