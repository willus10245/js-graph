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

  return {
    add,
  };
};

export const union = () => {};
