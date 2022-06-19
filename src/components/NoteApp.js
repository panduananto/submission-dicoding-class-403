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
		this.onMovingNoteToAnotherCollection = this.onMovingNoteToAnotherCollection.bind(this);
	}

	generateNoteId() {
		return +new Date();
	}

	onAddNoteHandler({ title, content }) {
		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					catatan: [
						...prevState.notes.catatan,
						{
							id: this.generateNoteId(),
							title,
							content,
						},
					],
				},
			};
		});
	}

	onMovingNoteToAnotherCollection(id, fromKey, toKey) {
		const target = this.state.notes[fromKey].find((note) => note.id === id);
		const recollect = this.state.notes[fromKey].filter((note) => note.id !== id);

		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					[fromKey]: [...recollect],
					[toKey]: [...prevState.notes[toKey], target],
				},
			};
		});
	}

	render() {
		return (
			<main>
				<div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-12 py-12 px-6">
					<NoteForm addNote={this.onAddNoteHandler}></NoteForm>
					<NoteList
						notes={this.state.notes}
						moveNoteToAnotherCollection={this.onMovingNoteToAnotherCollection}
					></NoteList>
				</div>
			</main>
		);
	}
}
