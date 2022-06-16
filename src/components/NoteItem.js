import React, { Component } from 'react';

export default class NoteItem extends Component {
	render() {
		return (
			<div className="col-span-3 overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg">
				<h1 className="mb-2 font-semibold">{this.props.note.title}</h1>
				<p>{this.props.note.content}</p>
			</div>
		);
	}
}
