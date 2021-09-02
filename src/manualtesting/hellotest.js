// TDD
// vanilla testing
describe('Hello Testing Suite', () => {
    let expected = '';
    // beforeEach, afterEach, beforeAll, afterAll
    // beforeAll() {} // one time for all the test this is called
    // afterAll() {} // fired once all the tests are completed

    beforeEach(() => {
        // initialization
        expected = 'Hello BOA';
    });

    afterEach(() => {
        // cleaning up
        expected = '';
    });

    it('says hello', () => {
        let actual = hello();
        expect(actual).toEqual(expected);
    });
});