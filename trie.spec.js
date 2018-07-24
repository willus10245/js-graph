import Trie from './trie';

describe('Tries', () => {
  it('should let you store and retrieve values with a string key', () => {
    const trie = Trie();
    trie.add(4, 'banana');
    expect(trie.get('banana')).toBe(4);
  });

  it('should let you remove values from the trie', () => {
    const trie = Trie();
    trie.add(4, 'banana');
    expect(trie.get('banana')).toBe(4);
    trie.remove('banana');
    const errorThrower = () => trie.get('banana');
    expect(errorThrower).toThrow('There\'s nothing there!');
  });
});