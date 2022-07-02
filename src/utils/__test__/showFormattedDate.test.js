import { showFormattedDate } from '../index';

it('able to format ISOString date to Indonesian local date', () => {
	expect(showFormattedDate('2022-07-02T09:27:47.010Z')).toBe('Sabtu, 2 Juli 2022');
});
