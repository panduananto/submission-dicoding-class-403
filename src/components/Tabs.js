import React, { Component } from 'react';

export default class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.children[0].props['data-label'],
		};

		this.onClickActiveTab = this.onClickActiveTab.bind(this);
	}

	onClickActiveTab(label) {
		this.setState({
			activeTab: label,
		});
	}

	render() {
		return (
			<div className="flex w-full flex-col items-center justify-center space-y-14 sm:space-y-12">
				<ul className="inline-flex space-x-4">
					{this.props.children.map((tab) => (
						<li key={tab.props['data-label']}>
							<span
								onClick={() => this.onClickActiveTab(tab.props['data-label'])}
								className={`${
									tab.props['data-label'] === this.state.activeTab
										? 'border-b-2 border-blue-700 text-blue-700'
										: 'hover:text-blue-700'
								} cursor-pointer px-4 py-2 text-sm font-semibold capitalize`}
							>
								{tab.props['data-label']}
							</span>
						</li>
					))}
				</ul>
				{this.props.children.filter((note) => note.props['data-label'] === this.state.activeTab)}
			</div>
		);
	}
}
