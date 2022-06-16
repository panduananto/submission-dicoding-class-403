import React, { Component } from 'react';

import NoteItem from './NoteItem';

export default class NoteList extends Component {
	render() {
		return (
			<div className="grid w-full grid-cols-12 gap-6">
				{this.props.notes.length !== 0 ? (
					this.props.notes.map((note) => <NoteItem key={note.id} note={note}></NoteItem>)
				) : (
					<div className="col-span-6 col-start-4 rounded-lg border border-slate-300 p-3 text-center shadow-sm">
						<p>Belum ada catatan di sini</p>
					</div>
				)}
			</div>
		);
	}
}
