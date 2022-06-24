import React, { Component, createRef } from 'react';

import autoBindReact from 'auto-bind/react';

export default class NoteForm extends Component {
	constructor(props) {
		super(props);

		this.formRef = createRef();
		this.state = {
			title: '',
			body: '',
			titleFieldVisible: false,
			titleCharacterLimit: 30,
		};

		autoBindReact(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.onClickOutsideForm);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.onClickOutsideForm);
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

	onSubmitEventHandler(event) {
		event.preventDefault();

		const { title, body } = this.state;

		if (title.length > this.state.titleCharacterLimit) return;

		this.props.addNote({ title, body });

		this.setState({
			title: '',
			body: '',
			titleFieldVisible: false,
		});
	}

	onClickOutsideForm(event) {
		if (this.formRef && !this.formRef.current.contains(event.target)) {
			this.onHideTitleField();
		}
	}

	onShowTitleField() {
		this.setState((prevState) => {
			return {
				...prevState,
				titleFieldVisible: true,
			};
		});
	}

	onHideTitleField() {
		this.setState((prevState) => {
			return {
				...prevState,
				titleFieldVisible: false,
			};
		});
	}

	render() {
		return (
			<form ref={this.formRef} onSubmit={this.onSubmitEventHandler} className="mx-auto w-full max-w-[600px]">
				<div className="w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-700">
					<div className="p-5">
						{this.state.titleFieldVisible && (
							<div className="mb-2">
								<div className="relative">
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
										className="block w-full border-0 p-0 font-semibold text-slate-900 outline-none placeholder:text-lg placeholder:font-semibold placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0 dark:bg-slate-700 dark:text-white dark:placeholder:text-slate-400"
									/>
									<span className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-lg bg-blue-200 text-center text-xs font-bold text-blue-900">
										{this.state.title.length}/{this.state.titleCharacterLimit}
									</span>
								</div>
								{this.state.title.length > this.state.titleCharacterLimit && (
									<span className="text-xs text-red-600">Maaf, judul melebihi limit karakter</span>
								)}
							</div>
						)}
						<label htmlFor="body" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Catatan
						</label>
						<textarea
							name="body"
							id="body"
							cols="20"
							rows="3"
							placeholder="Tulis catatanmu di sini..."
							value={this.state.body}
							onChange={this.onBodyChangeHandler}
							onFocus={this.onShowTitleField}
							className="block w-full resize-none border-0 p-0 text-slate-900 outline-none scrollbar-hide placeholder:font-medium placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0 dark:bg-slate-700 dark:text-white dark:placeholder:text-slate-400"
						></textarea>
					</div>
					<div className="bg-slate-50 px-5 py-3 text-right dark:bg-slate-800">
						<button className="inline-flex justify-center rounded-lg bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-800">
							Catat
						</button>
					</div>
				</div>
			</form>
		);
	}
}
