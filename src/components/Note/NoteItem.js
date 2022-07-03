import React, { Component } from 'react';

import { MdOutlineModeEdit } from 'react-icons/md';

import NoteUpdateModal from './NoteUpdateModal';

export default class NoteItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.note.title,
			body: this.props.note.body,
			showModal: false,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
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

	onBodyChangeHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				body: event.target.value,
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
			body: this.state.body,
		});
	}

	render() {
		return (
			<div
				onClick={this.handleOpenModal}
				className={`${
					this.props.gridLayout ? 'col-span-12 md:col-span-6 lg:col-span-3' : ''
				} group relative cursor-pointer overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg dark:border-slate-600 dark:bg-slate-800 dark:text-white`}
			>
				<h1 className="mb-2 font-semibold">{this.props.note.title}</h1>
				<p>{this.props.note.body}</p>
				<span className="absolute top-3 right-3">
					<MdOutlineModeEdit className="h-6 w-6 text-white transition-colors duration-200 ease-in-out group-hover:text-slate-500 dark:text-slate-800 dark:group-hover:text-slate-400"></MdOutlineModeEdit>
				</span>
				<NoteUpdateModal
					noteId={this.props.note.id}
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					title={this.state.title}
					onTitleChangeHandler={this.onTitleChangeHandler}
					body={this.state.body}
					onBodyChangeHandler={this.onBodyChangeHandler}
					label={this.props.label}
					moveNoteToAnotherCollection={this.props.moveNoteToAnotherCollection}
					removeNoteFromCollection={this.props.removeNoteFromCollection}
					udpateNote={this.handleUpdateNote}
				></NoteUpdateModal>
			</div>
		);
	}
}
