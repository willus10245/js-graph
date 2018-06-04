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
    add,
    has,
    remove,
  };
};

export const union = () => {};
