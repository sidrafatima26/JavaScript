// Node class to represent each node in the Splay tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Splay Tree class
class SplayTree {
    constructor() {
        this.root = null;
    }

    // Method to rotate a node to the root position
    splay(value) {
        this.root = this.splayNode(this.root, value);
    }

    // Helper method to recursively splay a node to the root position
    splayNode(root, value) {
        if (!root || root.value === value) {
            return root;
        }

        // Value is in left subtree
        if (value < root.value) {
            if (!root.left) {
                return root;
            }

            // Zig-zig (left left)
            if (value < root.left.value) {
                root.left.left = this.splayNode(root.left.left, value);
                root = this.rotateRight(root);
            }
            // Zig-zag (left right)
            else if (value > root.left.value) {
                root.left.right = this.splayNode(root.left.right, value);
                if (root.left.right) {
                    root.left = this.rotateLeft(root.left);
                }
            }

            if (root.left) {
                return this.rotateRight(root);
            } else {
                return root;
            }
        }
        // Value is in right subtree
        else {
            if (!root.right) {
                return root;
            }

            // Zig-zag (right left)
            if (value < root.right.value) {
                root.right.left = this.splayNode(root.right.left, value);
                if (root.right.left) {
                    root.right = this.rotateRight(root.right);
                }
            }
            // Zig-zig (right right)
            else if (value > root.right.value) {
                root.right.right = this.splayNode(root.right.right, value);
                root = this.rotateLeft(root);
            }

            if (root.right) {
                return this.rotateLeft(root);
            } else {
                return root;
            }
        }
    }

    // Method to perform a right rotation
    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        leftChild.right = node;
        return leftChild;
    }

    // Method to perform a left rotation
    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        rightChild.left = node;
        return rightChild;
    }

    // Method to insert a new value into the Splay tree
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.root = this.splayNode(this.root, value);
            if (value < this.root.value) {
                const newNode = new Node(value);
                newNode.left = this.root.left;
                newNode.right = this.root;
                this.root.left = null;
                this.root = newNode;
            } else if (value > this.root.value) {
                const newNode = new Node(value);
                newNode.right = this.root.right;
                newNode.left = this.root;
                this.root.right = null;
                this.root = newNode;
            }
        }
    }

    // Method to perform an inorder traversal of the Splay tree
    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const splayTree = new SplayTree();
splayTree.insert(10);
splayTree.insert(20);
splayTree.insert(15);
splayTree.insert(25);
splayTree.insert(5);

console.log("Inorder traversal of the Splay tree:");
splayTree.inorderTraversal();

// Splay the node with value 15 to root position
console.log("Splaying node with value 15:");
splayTree.splay(15);

console.log("Inorder traversal of the Splay tree after splaying:");
splayTree.inorderTraversal();
