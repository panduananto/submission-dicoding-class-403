import React, { Component, createRef, Fragment } from 'react';

export default class NoteForm extends Component {
	constructor(props) {
		super(props);

		this.formRef = createRef();

		this.state = {
			title: '',
			content: '',
			titleFieldVisible: false,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
		this.onShowTitleField = this.onShowTitleField.bind(this);
		this.onHideTitleField = this.onHideTitleField.bind(this);
		this.onClickOutsideForm = this.onClickOutsideForm.bind(this);
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

		const { title, content } = this.state;
		this.props.addNote({ title, content });

		this.setState({
			title: '',
			content: '',
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
			<form ref={this.formRef} onSubmit={this.onSubmitEventHandler} className="w-full">
				<div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
					<div className="p-5">
						{this.state.titleFieldVisible && (
							<Fragment>
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
									className="mb-2 block w-full border-0 p-0 font-semibold text-slate-900 outline-none placeholder:text-lg placeholder:font-semibold placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0"
								/>
							</Fragment>
						)}
						<label htmlFor="content" className="sr-only mb-2 text-sm font-medium text-slate-700">
							Catatan
						</label>
						<textarea
							name="content"
							id="content"
							cols="20"
							rows="3"
							placeholder="Tulis catatanmu di sini..."
							value={this.state.content}
							onChange={this.onContentChangeHandler}
							onFocus={this.onShowTitleField}
							className="block w-full resize-none border-0 p-0 text-slate-900 outline-none scrollbar-hide placeholder:font-medium placeholder:text-slate-500 focus:border-0 focus:outline-none focus:ring-0"
						></textarea>
					</div>
					<div className="bg-gray-50 px-5 py-3 text-right">
						<button className="inline-flex justify-center rounded-lg bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
							Catat
						</button>
					</div>
				</div>
			</form>
		);
	}
}
