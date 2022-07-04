import { render, screen } from '@testing-library/react';

import NoteList from '../NoteList';
import { getInitialData } from '../../../utils';

describe('NoteList', () => {
	it('matches snapshot', () => {
		const fakeNotes = { catatan: getInitialData(), arsip: [] };
		const view = render(<NoteList notes={fakeNotes}></NoteList>);

		expect(view.container).toMatchSnapshot();
	});

	it('renders notes correctly', () => {
		const fakeNotes = { catatan: getInitialData() };

		render(<NoteList notes={fakeNotes}></NoteList>);

		const noteTitles = screen.getAllByTestId(/note-title/i).map((h1) => h1.textContent);
		const fakeNoteTitles = [...fakeNotes.catatan.map((note) => note.title)].reverse();
		expect(noteTitles).toEqual(fakeNoteTitles);
	});

	it('renders empty state component when there are no notes', () => {
		const fakeNotes = { catatan: [] };

		render(<NoteList notes={fakeNotes}></NoteList>);
		expect(screen.getByText(/Belum ada catatan di sini/i)).toBeInTheDocument();
	});
});
