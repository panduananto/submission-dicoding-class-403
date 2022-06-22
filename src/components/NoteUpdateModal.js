import React, { Component } from 'react';

import ReactModal from 'react-modal';
import { MdArchive, MdUnarchive, MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default class NoteUpdateModal extends Component {
	render() {
		return (
			<ReactModal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.onRequestClose}
				shouldCloseOnOverlayClick={true}
				contentLabel="modal for editing note"
				closeTimeoutMS={150}
				className="NoteModal"
				overlayClassName="NoteModal__Overlay"
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
						value={this.props.title}
						onChange={this.props.onTitleChangeHandler}
						className="mb-2 block w-full border-0 p-0 font-semibold text-slate-900 outline-none placeholder:text-lg placeholder:font-semibold placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0 dark:bg-slate-800 dark:text-white"
					/>
					<label htmlFor="body" className="sr-only mb-2 text-sm font-medium text-slate-700">
						Catatan
					</label>
					<textarea
						name="body"
						id="body"
						cols="20"
						rows="6"
						placeholder="Tulis catatanmu di sini..."
						value={this.props.body}
						onChange={this.props.onBodyChangeHandler}
						className="block w-full resize-none border-0 p-0 text-slate-900 outline-none scrollbar-hide placeholder:font-medium placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0 dark:bg-slate-800 dark:text-white"
					></textarea>
					<div className="mt-8 flex justify-between">
						<IconContext.Provider
							value={{
								className:
									'h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-slate-900 dark:group-hover:text-slate-300',
							}}
						>
							<div className="inline-flex gap-2">
								{this.props.label === 'catatan' ? (
									<button
										type="button"
										onClick={() => this.props.moveNoteToAnotherCollection(this.props.noteId, 'catatan', 'arsip')}
										className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
									>
										<MdArchive></MdArchive>
									</button>
								) : (
									<button
										type="button"
										onClick={() => this.props.moveNoteToAnotherCollection(this.props.noteId, 'arsip', 'catatan')}
										className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
									>
										<MdUnarchive></MdUnarchive>
									</button>
								)}
								<button
									onClick={() => this.props.removeNoteFromCollection(this.props.noteId, this.props.label)}
									className="group inline-flex items-center rounded-lg bg-slate-100 p-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
								>
									<MdDelete></MdDelete>
								</button>
							</div>
						</IconContext.Provider>
						<button
							type="button"
							onClick={(event) => this.props.udpateNote(event)}
							className="inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
						>
							Done
						</button>
					</div>
				</form>
			</ReactModal>
		);
	}
}
