type TrieNodeChildren = {
    [key: string]: TrieNode;
  };
  
  class TrieNode {
    children: TrieNodeChildren;
    isEndOfWord: boolean;
  
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    root: TrieNode;
  
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string): void {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word: string): boolean {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix: string): boolean {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  // Optional export
  export default Trie;
  