import { saveDataToLocalStorage } from '../index';

const TEST_KEY = 'key';
const TEST_VALUE = { test: 'test' };

beforeEach(() => {
	localStorage.clear();
});

it('should save data to localStorage', () => {
	saveDataToLocalStorage(TEST_KEY, TEST_VALUE);

	expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE);
	expect(localStorage.length).toEqual(1);
});
