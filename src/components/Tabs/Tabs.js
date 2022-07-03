import React, { Component } from 'react';

import TabsButton from './TabsButton';

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
			<div
				data-testid="tabs-container"
				className="flex w-full flex-col items-center justify-center space-y-14 sm:space-y-12"
			>
				<ul
					role="tablist"
					className="flex w-full justify-center space-x-4 border-b border-slate-200 dark:border-slate-800"
				>
					{this.props.children.map((tab) => (
						<li key={tab.props['data-label']}>
							<TabsButton
								label={tab.props['data-label']}
								activeTab={this.state.activeTab}
								onClickActiveTab={this.onClickActiveTab}
							></TabsButton>
						</li>
					))}
				</ul>
				<div data-testid="tabs-content" className="w-full">
					{this.props.children.filter((note) => note.props['data-label'] === this.state.activeTab)}
				</div>
			</div>
		);
	}
}
