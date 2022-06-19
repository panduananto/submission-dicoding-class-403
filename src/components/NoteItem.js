import React, { Component } from 'react';

import ReactModal from 'react-modal';
import { MdArchive, MdUnarchive, MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default class NoteItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal(event) {
		event.stopPropagation();
		this.setState({ showModal: true });
	}

	handleCloseModal(event) {
		event.stopPropagation();
		this.setState({ showModal: false });
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
				<ReactModal
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
					contentLabel="modal for editing note"
					closeTimeoutMS={150}
					style={{
						content: {
							position: 'static',
							inset: '0px',
							borderColor: '#cbd5e1',
							borderRadius: '0.5rem',
							boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
							width: '100%',
							maxWidth: '600px',
						},
						overlay: {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						},
					}}
				>
					<form className="h-full">
						<label htmlFor="title" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Judul Catatan
						</label>
						<input
							type="text"
							id="title"
							autoComplete="off"
							placeholder="Judul catatan"
							value={this.props.note.title}
							onChange={this.onTitleChangeHandler}
							className="mb-2 block w-full border-0 p-0 font-semibold text-slate-900 outline-none placeholder:text-lg placeholder:font-semibold placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0"
						/>
						<label htmlFor="content" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Catatan
						</label>
						<textarea
							name="content"
							id="content"
							cols="20"
							rows="6"
							placeholder="Tulis catatanmu di sini..."
							value={this.props.note.content}
							onChange={this.onContentChangeHandler}
							className="block w-full resize-none border-0 p-0 text-slate-900 outline-none scrollbar-hide placeholder:font-medium placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0"
						></textarea>
						<div className="mt-8 flex justify-between">
							<IconContext.Provider
								value={{
									className:
										'h-5 w-5 text-slate-500 transition-colors duration-200 ease-in-out group-hover:text-slate-900',
								}}
							>
								<div className="inline-flex gap-2">
									{this.props.label === 'catatan' ? (
										<button
											type="button"
											onClick={() => this.props.moveNoteToAnotherCollection(this.props.note.id, 'catatan', 'arsip')}
											className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200"
										>
											<MdArchive></MdArchive>
										</button>
									) : (
										<button
											type="button"
											onClick={() => this.props.moveNoteToAnotherCollection(this.props.note.id, 'arsip', 'catatan')}
											className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200"
										>
											<MdUnarchive></MdUnarchive>
										</button>
									)}
									<button
										onClick={() => this.props.removeNoteFromCollection(this.props.note.id, this.props.label)}
										className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200"
									>
										<MdDelete></MdDelete>
									</button>
								</div>
							</IconContext.Provider>
							<button className="inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200">
								Done
							</button>
						</div>
					</form>
				</ReactModal>
			</div>
		);
	}
}
