import React, { Component } from 'react';

import NoteForm from './NoteForm';
import NoteList from './NoteList';

export default class NoteApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: {
				catatan: [],
				arsip: [],
			},
		};

		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
	}

	onAddNoteHandler({ title, content }) {
		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					catatan: [
						...prevState.notes.catatan,
						{
							id: +new Date(),
							title,
							content,
						},
					],
				},
			};
		});
	}

	render() {
		return (
			<main>
				<div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-12 py-12 px-6">
					<NoteForm addNote={this.onAddNoteHandler}></NoteForm>
					<NoteList notes={this.state.notes}></NoteList>
				</div>
			</main>
		);
	}
}
