import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from '../../../App';

describe('ToggleLayout', () => {
	it('renders grid layout by default', () => {
		render(<App></App>);

		expect(screen.getByRole('button', { name: /layout-toggle-button/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/layout-toggle-grid-icon/i)).toBeInTheDocument();
		expect(screen.getByTestId(/note-list-container/i)).toHaveClass('grid');
	});

	it('able to toggle the layout', async () => {
		render(<App></App>);

		fireEvent.click(screen.getByRole('button', { name: /layout-toggle-button/i }));
		expect(screen.getByTestId(/note-list-container/i)).toHaveClass('flex');
		await waitFor(() => {
			expect(screen.getByLabelText(/layout-toggle-list-icon/i)).toBeInTheDocument();
		});

		fireEvent.click(screen.getByRole('button', { name: /layout-toggle-button/i }));
		expect(screen.getByTestId(/note-list-container/i)).toHaveClass('grid');
		await waitFor(() => {
			expect(screen.getByLabelText(/layout-toggle-grid-icon/i)).toBeInTheDocument();
		});
	});
});
