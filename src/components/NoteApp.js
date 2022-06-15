import React, { Component } from 'react';

import NoteForm from './NoteForm';

export default class NoteApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [],
		};

		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
	}

	onAddNoteHandler({ title, content }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						content,
					},
				],
			};
		});
	}

	render() {
		return (
			<div className="mx-auto max-w-screen-lg py-12">
				<NoteForm addNote={this.onAddNoteHandler}></NoteForm>
			</div>
		);
	}
}
