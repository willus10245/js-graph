import { Set } from './set';

describe('the set function', () => {
  const set = Set();

  it('adds an element to the set', () => {
    expect(set.add(7)).toEqual([7]);
    expect(set.add('fish')).toEqual([7, 'fish']);
    expect(set.add({ one: 1 })).toEqual([7, 'fish', { one: 1 }]);
  });

  it('doesn\'t add duplicate elements to the set', () => {
    const addDuplicate = () => {
      set.add(7);
    };
    expect(addDuplicate).toThrow('that value is already in the set!');
  });
});
