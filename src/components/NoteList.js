import React, { Component, Fragment } from 'react';

import NoteItem from './NoteItem';
import Tabs from './Tabs';

export default class NoteList extends Component {
	render() {
		return (
			<Fragment>
				<Tabs>
					{Object.keys(this.props.notes).map((key) => (
						<div
							key={key}
							data-label={key}
							className={`${
								this.props.notes[key].length !== 0 ? 'grid w-full grid-cols-12 gap-4' : 'w-full max-w-[600px]'
							}`}
						>
							{this.props.notes[key].length !== 0 ? (
								this.props.notes[key].map((note) => (
									<NoteItem
										key={note.id}
										note={note}
										label={key}
										moveNoteToAnotherCollection={this.props.moveNoteToAnotherCollection}
										removeNoteFromCollection={this.props.removeNoteFromCollection}
									></NoteItem>
								))
							) : (
								<div className="w-full rounded-lg border border-slate-300 p-3 text-center shadow-sm">
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
