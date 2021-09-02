/**
 * Pipe: a utility function for transforming the data
 * used in templates of html
 * built-in / custom pipe - test
 */

import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
    it('Create an instance and check functionality', () => {
        const pipe = new ReversePipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform('olleh')).toBe('hello');
    });
});