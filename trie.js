const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const Trie = () => {
  let value = null;

  const pointers = Array(26).fill(null);
  const pointersIsNull = () => pointers.every(entry => entry === null);

  const add = (valueToStore, key) => {
    const lowercaseKey = key.toLowerCase();
    const firstLetter = lowercaseKey.charAt(0);
    const letterIndex = letters.indexOf(firstLetter);

    if (pointers[letterIndex] === null) {
      pointers[letterIndex] = Trie();
    }

    if (key === '') {
      value = valueToStore;
    } else {
      const newKey = key.substr(1);
      pointers[letterIndex].add(valueToStore, newKey);
    }
  };

  const get = (key) => {
    const getError = () => { throw new Error('There\'s nothing there!'); };
    if (key === '') {
      return value === null ? getError() : value;
    }
    const lowercaseKey = key.toLowerCase();
    const firstLetter = lowercaseKey.charAt(0);
    const letterIndex = letters.indexOf(firstLetter);
    const newKey = key.substr(1);

    return pointers[letterIndex] === null
      ? getError()
      : pointers[letterIndex].get(newKey);
  };

  const remove = (key) => {
    const lowercaseKey = key.toLowerCase();
    const firstLetter = lowercaseKey.charAt(0);
    const letterIndex = letters.indexOf(firstLetter);

    if (key === '') {
      value = null;
    }

    if (key.length >= 1) {
      const newKey = key.substr(1);
      pointers[letterIndex].remove(newKey);
    }

    if (pointers[letterIndex] && pointers[letterIndex].pointersIsNull()) {
      pointers[letterIndex] = null;
    }
  };

  return {
    pointersIsNull,
    add,
    get,
    remove,
  };
};

export default Trie;