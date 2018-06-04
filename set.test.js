import { Set, multisetFunctions } from './set';

const { union, intersection } = multisetFunctions();

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

  it('checks if a given element is in the set', () => {
    expect(set.has('fish')).toBe(true);
    expect(set.has(false)).toBe(false);
  });

  it('removes elements from the set', () => {
    expect(set.remove('fish')).toEqual([7, { one: 1 }]);

    const removeNonexistant = () => {
      set.remove(false);
    };
    expect(removeNonexistant).toThrow('that value is not in the set!');
  });
});

describe('multiset functions', () => {
  const set1 = Set();
  set1.add(1);
  set1.add(2);
  set1.add(3);
  set1.add('a');
  set1.add('b');
  set1.add('c');

  const set2 = Set();
  set2.add(1);
  set2.add(2);
  set2.add(3);
  set2.add('x');
  set2.add('y');
  set2.add('z');

  it('union functions', () => {
    expect(union(set1.values, set2.values))
      .toEqual([1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z']);
  });

  it('intersection functions', () => {
    expect(intersection(set1.values, set2.values)).toEqual([1, 2, 3]);
  });
});
