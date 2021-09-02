import { SquarePipe } from './square.pipe';

describe('SquarePipe instance present', () => {
  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('SquarePipe logic', () => {
  it('square the number', () => {
    const pipe = new SquarePipe();
    const actual = pipe.transform(10);
    expect(actual).toEqual(100);
  });
});