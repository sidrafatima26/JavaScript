// Node class to represent each node in the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the binary tree
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a new node into the binary tree
    insertNode(node, newNode) {
        if (!node.left) {
            node.left = newNode;
        } else if (!node.right) {
            node.right = newNode;
        } else {
            // If both left and right children are present, try inserting into left subtree
            this.insertNode(node.left, newNode);
        }
    }

    // Method to perform an inorder traversal of the binary tree
    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);

console.log("Inorder traversal of the binary tree:");
bt.inorderTraversal();
