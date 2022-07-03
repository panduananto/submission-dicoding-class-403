import { render, screen, fireEvent } from '@testing-library/react';

import NoteForm from '../NoteForm';

const lorem31 = 'Lorem ipsum dolor sit amet, con';

describe('NoteForm', () => {
	it('matches snapshot', () => {
		const view = render(<NoteForm></NoteForm>);

		expect(view.container).toMatchSnapshot();
	});

	it('renders correctly', () => {
		render(<NoteForm></NoteForm>);
		expect(screen.getByLabelText(/note-submit-button/i)).toBeInTheDocument();
	});

	it('only shows title field if textarea for note body is on focus', () => {
		render(<NoteForm></NoteForm>);
		expect(screen.queryByRole('textbox', { name: /note-title/i })).not.toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: /note-body/i })).toBeInTheDocument();
		fireEvent.focus(screen.getByRole('textbox', { name: /note-body/i }));
		expect(screen.getByRole('textbox', { name: /note-title/i })).toBeVisible();
	});

	it('shows warning text if tittle length exceed 30 characters', () => {
		render(<NoteForm></NoteForm>);
		expect(screen.queryByText(/Maaf, judul melebihi limit karakter/i)).not.toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: /note-body/i })).toBeInTheDocument();
		fireEvent.focus(screen.getByRole('textbox', { name: /note-body/i }));
		expect(screen.getByRole('textbox', { name: /note-title/i })).toBeVisible();
		fireEvent.change(screen.getByRole('textbox', { name: /note-title/i }), { target: { value: lorem31 } });
		expect(screen.getByRole('textbox', { name: /note-title/i }).value).toBe(lorem31);
		expect(screen.getByRole('textbox', { name: /note-title/i }).value.length).toBe(31);
		expect(screen.getByText(/Maaf, judul melebihi limit karakter/i)).toBeInTheDocument();
	});

	it('submits user input correctly', () => {
		const mockedAddNote = jest.fn();

		render(<NoteForm addNote={mockedAddNote}></NoteForm>);
		expect(screen.getByRole('textbox', { name: /note-body/i })).toBeInTheDocument();
		fireEvent.focus(screen.getByRole('textbox', { name: /note-body/i }));
		expect(screen.getByRole('textbox', { name: /note-title/i })).toBeVisible();
		fireEvent.change(screen.getByRole('textbox', { name: /note-title/i }), { target: { value: 'lorem31char' } });
		expect(screen.getByRole('textbox', { name: /note-title/i }).value).toBe('lorem31char');
		fireEvent.change(screen.getByRole('textbox', { name: /note-body/i }), { target: { value: lorem31 } });
		expect(screen.getByRole('textbox', { name: /note-body/i }).value).toBe(lorem31);
		fireEvent.submit(screen.getByRole('form', { name: /note-form/i }));
	});
});
