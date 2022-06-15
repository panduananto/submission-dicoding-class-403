import React, { Component } from 'react';

export default class NoteForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			content: '',
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmitEventHandler}>
				<div className="w-[600px] overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
					<div className="p-5">
						<label htmlFor="title" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Judul Catatan
						</label>
						<input
							type="text"
							id="title"
							autoComplete="off"
							placeholder="Judul catatan"
							value={this.state.title}
							onChange={this.onTitleChangeHandler}
							className="mb-2 block w-full border-0 p-0 font-semibold text-slate-900 outline-none placeholder:text-lg placeholder:font-semibold placeholder:text-slate-600 focus:border-0 focus:outline-none focus:ring-0"
						/>
						<label htmlFor="content" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Catatan
						</label>
						<textarea
							name="content"
							id="content"
							cols="20"
							rows="4"
							placeholder="Tulis catatanmu di sini..."
							value={this.state.content}
							onChange={this.onContentChangeHandler}
							className="block w-full resize-none border-0 p-0 text-slate-900 outline-none scrollbar-hide placeholder:font-medium placeholder:text-slate-600 focus:border-0 focus:outline-none focus:ring-0"
						></textarea>
					</div>
					<div className="bg-gray-50 px-5 py-3 text-right">
						<button className="inline-flex justify-center rounded-lg bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
							Catat
						</button>
					</div>
				</div>
			</form>
		);
	}
}
