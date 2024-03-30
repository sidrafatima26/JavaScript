// TrieNode class to represent each node in the trie
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie class
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Method to insert a word into the trie
    insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // If the current character is not in the trie, create a new node
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }

            // Move to the next node
            current = current.children[char];
        }

        // Mark the end of the word
        current.isEndOfWord = true;
    }

    // Method to search for a word in the trie
    search(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // If the current character is not in the trie, the word is not found
            if (!current.children[char]) {
                return false;
            }

            // Move to the next node
            current = current.children[char];
        }

        // Return true if the word exists and marks the end of a word
        return current.isEndOfWord;
    }

    // Method to check if a word has any prefix in the trie
    startsWith(prefix) {
        let current = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            // If the current character is not in the trie, the prefix is not found
            if (!current.children[char]) {
                return false;
            }

            // Move to the next node
            current = current.children[char];
        }

        // Return true if the prefix exists in the trie
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: true
console.log(trie.search("ap"));      // Output: false
console.log(trie.startsWith("ap"));  // Output: true
console.log(trie.startsWith("ae"));  // Output: false
