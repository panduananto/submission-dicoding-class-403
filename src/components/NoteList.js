import React, { Component, Fragment } from 'react';

import NoteItem from './NoteItem';
import Tabs from './Tabs';

export default class NoteList extends Component {
	render() {
		return (
			<Fragment>
				<Tabs>
					{Object.keys(this.props.notes).map((key) => (
						<div key={key} data-label={key} className="grid w-full grid-cols-12 gap-4">
							{this.props.notes[key].map((note) => (
								<NoteItem
									key={note.id}
									note={note}
									label={key}
									moveNoteToAnotherCollection={this.props.moveNoteToAnotherCollection}
									removeNoteFromCollection={this.props.removeNoteFromCollection}
								></NoteItem>
							))}
						</div>
					))}
				</Tabs>
			</Fragment>
		);
	}
}
