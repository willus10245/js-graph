export const Set = () => {
  const values = [];

  const add = (value) => {
    if (!values.includes(value)) {
      values.push(value);
    }
    return values;
  };

  const has = value => values.includes(value);

  const remove = (value) => {
    if (values.includes(value)) {
      values.splice(values.indexOf(value), 1);
    }
    return values;
  };

  return {
    values,
    add,
    has,
    remove,
  };
};

export const findUnion = (set1, set2) => {
  const unionSet = [...set1];
  set2.forEach((element) => {
    if (!unionSet.includes(element)) {
      unionSet.push(element);
    }
  });

  return unionSet;
};

export const findIntersection = (set1, set2) => set1.filter(element => set2.includes(element));

export const findRelativeComplement = (set1, set2) =>
  set1.filter(element => !set2.includes(element));

export const findSymmetricDifference = (set1, set2) =>
  findRelativeComplement(set1, set2).concat(findRelativeComplement(set2, set1));