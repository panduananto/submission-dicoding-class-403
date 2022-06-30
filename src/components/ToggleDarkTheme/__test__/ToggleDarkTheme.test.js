import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from '../../../App';

describe('ToggleDarkTheme', () => {
	it('renders light theme by default', () => {
		render(<App></App>);

		expect(screen.getByRole('button', { name: /theme-toggle-button/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/theme-toggle-light-icon/i)).toBeInTheDocument();
		expect(document.documentElement).not.toHaveClass('dark');
	});

	it('able to toggle the theme', async () => {
		render(<App></App>);

		fireEvent.click(screen.getByRole('button', { name: /theme-toggle-button/i }));
		expect(document.documentElement).toHaveClass('dark');
		await waitFor(() => {
			expect(screen.getByLabelText(/theme-toggle-dark-icon/i)).toBeInTheDocument();
		});

		fireEvent.click(screen.getByRole('button', { name: /theme-toggle-button/i }));
		expect(document.documentElement).not.toHaveClass('dark');
		await waitFor(() => {
			expect(screen.getByLabelText(/theme-toggle-light-icon/i)).toBeInTheDocument();
		});
	});
});
