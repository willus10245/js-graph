export const Set = () => {
  const values = [];

  const add = (value) => {
    if (values.includes(value)) {
      throw new Error('that value is already in the set!');
    } else {
      values.push(value);
      return values;
    }
  };

  const has = value => values.includes(value);

  const remove = (value) => {
    if (!values.includes(value)) {
      throw new Error('that value is not in the set!');
    } else {
      values.splice(values.indexOf(value), 1);
      return values;
    }
  };

  return {
    values,
    add,
    has,
    remove,
  };
};

export const multisetFunctions = () => {
  const union = (set1, set2) => {
    const unionSet = set1.reduce((acc, element) => acc.concat(element), []);
    set2.forEach((element) => {
      if (!unionSet.includes(element)) {
        unionSet.push(element);
      }
    });

    return unionSet;
  };

  const intersection = (set1, set2) => set1.filter(element => set2.includes(element));

  return {
    union,
    intersection,
  };
};
