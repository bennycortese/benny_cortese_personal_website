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

    findAllWithPrefix(prefix: string): string[] {
        let node = this.root;
        let results: string[] = [];
    
        // Find the node where the prefix ends
        for (let char of prefix) {
          if (!node.children[char]) {
            return results; // If prefix not found, return empty array
          }
          node = node.children[char];
        }
    
        // Recursively find all words from the end of the prefix
        this.dfs(node, prefix, results);
        return results;
      }
    
      // Helper method to perform DFS from a given node, appending words to results
      private dfs(node: TrieNode, prefix: string, results: string[]) {
        if (node.isEndOfWord) {
          results.push(prefix);
        }
    
        Object.keys(node.children).forEach((char) => {
          this.dfs(node.children[char], prefix + char, results);
        });
    }
  }
  
  // Optional export
  export default Trie;
  