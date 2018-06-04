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

  return {
    add,
    has,
  };
};

export const union = () => {};
