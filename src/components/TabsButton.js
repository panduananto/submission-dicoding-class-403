import React, { Component } from 'react';

import { MdOutlineArchive, MdOutlineNote } from 'react-icons/md';

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
					<MdOutlineNote className="h-6 w-6"></MdOutlineNote>
				) : (
					<MdOutlineArchive className="h-6 w-6"></MdOutlineArchive>
				)}
				{this.props.label}
			</span>
		);
	}
}
