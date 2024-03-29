// Node class to represent each node in the expression tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Expression Tree class
class ExpressionTree {
    constructor(expression) {
        this.root = this.buildTree(expression);
    }

    // Method to build an expression tree from a given expression
    buildTree(expression) {
        const stack = [];

        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];

            if (char === '+' || char === '-' || char === '*' || char === '/') {
                const rightOperand = stack.pop();
                const leftOperand = stack.pop();
                const newNode = new Node(char);
                newNode.left = leftOperand;
                newNode.right = rightOperand;
                stack.push(newNode);
            } else {
                const newNode = new Node(char);
                stack.push(newNode);
            }
        }

        return stack.pop();
    }

    // Method to perform an inorder traversal of the expression tree
    inorderTraversal(node = this.root) {
        if (node !== null) {
            if (node.left || node.right) {
                process.stdout.write('(');
            }

            this.inorderTraversal(node.left);
            process.stdout.write(node.value);
            this.inorderTraversal(node.right);

            if (node.left || node.right) {
                process.stdout.write(')');
            }
        }
    }
}

// Example usage:
const expression = "a+b*c";
const expressionTree = new ExpressionTree(expression);

console.log("Infix expression representation of the expression tree:");
expressionTree.inorderTraversal();
