import React, { Component, Fragment } from 'react';

import NoteItem from './NoteItem';
import Tabs from '../Tabs/Tabs';

export default class NoteList extends Component {
	getNote(searchTerm, key) {
		if (!searchTerm) {
			return [...this.props.notes[key]].reverse();
		}

		const result = this.props.notes[key].filter((note) => {
			const title = note.title.toLowerCase();
			return title.includes(searchTerm.toLowerCase());
		});

		return [...result].reverse();
	}

	render() {
		return (
			<Fragment>
				<Tabs>
					{Object.keys(this.props.notes).map((key) => (
						<div
							key={key}
							data-label={key}
							data-testid="note-list-container"
							className={`${
								this.props.notes[key].length !== 0
									? this.props.gridLayout
										? 'grid w-full grid-cols-12 gap-4'
										: 'mx-auto flex w-full max-w-[600px] flex-col space-y-4'
									: 'mx-auto w-full max-w-[600px]'
							}`}
						>
							{this.props.notes[key].length !== 0 ? (
								this.getNote(this.props.searchTerm, key).map((note) => (
									<NoteItem
										key={note.id}
										note={note}
										label={key}
										moveNoteToAnotherCollection={this.props.moveNoteToAnotherCollection}
										removeNoteFromCollection={this.props.removeNoteFromCollection}
										updateNote={this.props.updateNote}
										gridLayout={this.props.gridLayout}
									></NoteItem>
								))
							) : (
								<div className="w-full rounded-lg border border-slate-300 p-3 text-center text-slate-900 shadow-sm dark:border-slate-600 dark:text-white">
									<p>Belum ada catatan di sini</p>
								</div>
							)}
						</div>
					))}
				</Tabs>
			</Fragment>
		);
	}
}
