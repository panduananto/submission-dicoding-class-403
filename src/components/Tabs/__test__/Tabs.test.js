import { render, screen, fireEvent } from '@testing-library/react';

import Tabs from '../Tabs';

describe('Tabs', () => {
	it('matches snapshot', () => {
		const view = render(
			<Tabs>
				<div data-label="Test 1">Test 1</div>
				<div data-label="Test 2">Test 2</div>
				<div data-label="Test 3">Test 3</div>
			</Tabs>
		);

		expect(view.container).toMatchSnapshot();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		render(
			<Tabs>
				<div data-label="Test 1">Test 1</div>
				<div data-label="Test 2">Test 2</div>
				<div data-label="Test 3">Test 3</div>
			</Tabs>,
			div
		);

		expect(screen.getByTestId('tabs-container')).toBeInTheDocument();
		expect(screen.getByTestId('tabs-content').textContent).toBe('Test 1');
	});

	it('click from one tab to the next', () => {
		const currentTabsClass = 'border-b-2 border-blue-700 text-blue-700 dark:border-blue-600 dark:text-blue-600';

		const div = document.createElement('div');
		render(
			<Tabs>
				<div data-label="Test 1">Test 1</div>
				<div data-label="Test 2">Test 2</div>
				<div data-label="Test 3">Test 3</div>
			</Tabs>,
			div
		);

		expect(screen.getByTestId('tabs-container')).toBeInTheDocument();
		expect(screen.getByTestId('tabs-content').textContent).toBe('Test 1');
		expect(screen.getByTestId('tabs-Test 1')).toHaveClass(currentTabsClass);

		fireEvent.click(screen.getByTestId('tabs-Test 2'));

		expect(screen.getByTestId('tabs-content').textContent).toBe('Test 2');
		expect(screen.getByTestId('tabs-Test 2')).toHaveClass(currentTabsClass);
	});
});
