import {
  Set,
  findUnion,
  findIntersection,
  findRelativeComplement,
  findSymmetricDifference,
} from './set';

describe('the set function', () => {
  const set = Set();

  it('adds an element to the set', () => {
    expect(set.add(7)).toEqual([7]);
    expect(set.add('fish')).toEqual([7, 'fish']);
    expect(set.add({ one: 1 })).toEqual([7, 'fish', { one: 1 }]);
    expect(set.add(7)).toEqual([7, 'fish', { one: 1 }]);
  });

  it('checks if a given element is in the set', () => {
    expect(set.has('fish')).toBe(true);
    expect(set.has(false)).toBe(false);
  });

  it('removes elements from the set', () => {
    expect(set.remove('fish')).toEqual([7, { one: 1 }]);
    expect(set.remove(false)).toEqual([7, { one: 1 }]);
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

  it('findUnion functions', () => {
    expect(findUnion(set1.values, set2.values))
      .toEqual([1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z']);
  });

  it('findIntersection functions', () => {
    expect(findIntersection(set1.values, set2.values)).toEqual([1, 2, 3]);
  });

  it('findRelativeComplement functions', () => {
    expect(findRelativeComplement(set1.values, set2.values)).toEqual(['a', 'b', 'c']);
    expect(findRelativeComplement(set2.values, set1.values)).toEqual(['x', 'y', 'z']);
  });

  it('findSymmetricDifference functions', () => {
    expect(findSymmetricDifference(set1.values, set2.values)).toEqual(['a', 'b', 'c', 'x', 'y', 'z']);
  });
});