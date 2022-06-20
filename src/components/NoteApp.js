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
		this.onRemoveNoteFromCollection = this.onRemoveNoteFromCollection.bind(this);
		this.onUpdateNoteHandler = this.onUpdateNoteHandler.bind(this);
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

	findNote(id, key) {
		return this.state.notes[key].find((note) => note.id === id);
	}

	findNoteIndex(id, key) {
		return this.state.notes[key].findIndex((note) => note.id === id);
	}

	recollectNote(id, key) {
		return this.state.notes[key].filter((note) => note.id !== id);
	}

	onMovingNoteToAnotherCollection(id, fromKey, toKey) {
		const target = this.findNote(id, fromKey);
		const recollected = this.recollectNote(id, fromKey);

		if (target === null) return;

		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					[fromKey]: [...recollected],
					[toKey]: [...prevState.notes[toKey], target],
				},
			};
		});
	}

	onRemoveNoteFromCollection(id, key) {
		const recollected = this.recollectNote(id, key);

		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					[key]: [...recollected],
				},
			};
		});
	}

	onUpdateNoteHandler(id, key, note) {
		const target = this.findNoteIndex(id, key);

		if (target === -1) return;

		const { title, content } = note;
		const updatedNote = { ...this.state.notes[key][target], title, content };

		this.setState((prevState) => {
			return {
				notes: {
					...prevState.notes,
					[key]: [...prevState.notes[key].slice(0, target), updatedNote, ...prevState.notes[key].slice(target + 1)],
				},
			};
		});
	}

	render() {
		return (
			<main className="pt-20">
				<div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-12 py-12 px-6">
					<NoteForm addNote={this.onAddNoteHandler}></NoteForm>
					<NoteList
						notes={this.state.notes}
						searchTerm={this.props.searchTerm}
						moveNoteToAnotherCollection={this.onMovingNoteToAnotherCollection}
						removeNoteFromCollection={this.onRemoveNoteFromCollection}
						updateNote={this.onUpdateNoteHandler}
					></NoteList>
				</div>
			</main>
		);
	}
}
