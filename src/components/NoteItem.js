import React, { Component } from 'react';

import { MdOutlineModeEdit } from 'react-icons/md';
import NoteUpdateModal from './NoteUpdateModal';

export default class NoteItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.note.title,
			content: this.props.note.content,
			showModal: false,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleUpdateNote = this.handleUpdateNote.bind(this);
	}

	onTitleChangeHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			};
		});
	}

	onContentChangeHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				content: event.target.value,
			};
		});
	}

	handleOpenModal(event) {
		event.stopPropagation();
		this.setState({ showModal: true });
	}

	handleCloseModal(event) {
		event.stopPropagation();
		this.setState({ showModal: false });
	}

	handleUpdateNote(event) {
		this.handleCloseModal(event);
		this.props.updateNote(this.props.note.id, this.props.label, {
			title: this.state.title,
			content: this.state.content,
		});
	}

	render() {
		return (
			<div
				onClick={this.handleOpenModal}
				className="group relative col-span-3 overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg"
			>
				<h1 className="mb-2 font-semibold">{this.props.note.title}</h1>
				<p>{this.props.note.content}</p>
				<span className="absolute top-3 right-3">
					<MdOutlineModeEdit className="h-6 w-6 text-white transition-colors duration-200 ease-in-out group-hover:text-slate-500"></MdOutlineModeEdit>
				</span>
				<NoteUpdateModal
					noteId={this.props.note.id}
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					title={this.state.title}
					onTitleChangeHandler={this.onTitleChangeHandler}
					content={this.state.content}
					onContentChangeHandler={this.onContentChangeHandler}
					label={this.props.label}
					moveNoteToAnotherCollection={this.props.moveNoteToAnotherCollection}
					removeNoteFromCollection={this.props.removeNoteFromCollection}
					udpateNote={this.handleUpdateNote}
				></NoteUpdateModal>
			</div>
		);
	}
}
