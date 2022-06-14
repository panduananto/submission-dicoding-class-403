import React, { Component } from 'react';

import NoteForm from './NoteForm';

export default class NoteApp extends Component {
	render() {
		return (
			<div className="mx-auto max-w-screen-lg py-12">
				<NoteForm></NoteForm>
			</div>
		);
	}
}
