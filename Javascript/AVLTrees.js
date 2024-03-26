// Node class to represent each node in the AVL tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVL Tree class
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Utility function to get the height of a node
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    // Utility function to update the height of a node
    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Utility function to get the balance factor of a node
    getBalanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Method to perform a right rotation
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Method to perform a left rotation
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Method to insert a new value into the AVL tree
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    // Helper method to recursively insert a new node into the AVL tree
    insertNode(root, value) {
        if (!root) {
            return new Node(value);
        }

        if (value < root.value) {
            root.left = this.insertNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.insertNode(root.right, value);
        } else {
            // Duplicate values are not allowed
            return root;
        }

        // Update height of this ancestor node
        this.updateHeight(root);

        // Check if the node is unbalanced
        const balanceFactor = this.getBalanceFactor(root);

        // Left Left Case
        if (balanceFactor > 1 && value < root.left.value) {
            return this.rightRotate(root);
        }

        // Right Right Case
        if (balanceFactor < -1 && value > root.right.value) {
            return this.leftRotate(root);
        }

        // Left Right Case
        if (balanceFactor > 1 && value > root.left.value) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // Right Left Case
        if (balanceFactor < -1 && value < root.right.value) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    // Method to perform an inorder traversal of the AVL tree
    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(`${node.value} (Height: ${node.height})`);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log("Inorder traversal of the AVL tree:");
avlTree.inorderTraversal();
