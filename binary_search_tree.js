// 🕒 Time Complexity:
// Access: O(log(N))
// Insertion: O(log(N))
// Deletion: O(log(N))
// Search: O(log(N))
// •
// ✅Efficient: Search, Insertion & Deletion
// Can be used in problems where an efficient search is required.
// •
// 📍Binary Search Tree is a binary tree in which nodes with a lesser value are stored on the left while the nodes with a higher value are stored at the right.
// •
// 📍At each node, we will have larger value nodes at right and smaller value nodes at left. This property makes it faster to search because on each comparison we can skip the other half of the subtree.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insert(data) {
    // Find the correct position recursively
    // and add the node

    function insertNode(node, newNode) {
      // data is less than current node data
      if (newNode.data < node.data) {
        if (node.left == null) {
          node.left = newNode;
          return;
        }
        insertNode(node.left, newNode);
      } else {
        // data is more than current node data
        if (node.right == null) {
          node.right = newNode;
          return;
        }
        insertNode(node.right, newNode);
      }
    }

    let newNode = new Node(data);
    // If root is null then add newNode to it
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    // find the correct position and add the node
    insertNode(this.root, newNode);
  }

  remove(data) {
    // find the node with minimum value
    function findMinNode(node) {
      if (node.left == null) {
        return node;
      }
      return this.findMinNode(node.left)
    }

    function removeNode(node, key) {
      //find the node recursively and remove
      if (node == null) {
        return null;
      } else if (key < node.data) {
        //node is greater look in the left sub tree
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        // node is smaller look in right sub tree
        node.right = removeNode(node.right, key);
        return node;
      } else {
        // delete the node and reset it's children
        if (node.left == null && node.right == null) {
          node = null;
          return node;
        }
        if (node.left == null) {
          node = node.right;
          return node;
        } else if (node.right == null) {
          node = node.left;
          return node;
        }

        let aux = findMinNode(node.right);
        // delete node with two children
        node.data = aux.data;
        node.right = removeNode(node.right, aux.data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
    // reset the root of the tree
  }

  search(node, data) {
    // node not found
    if (node == null) {
      return null;
    }

    //if current node is greater
    //then look in the left sub tree
    else if (data < node.data) {
      return this.search(node.left, data);
    }

    //if current node is smaller
    else if (data > node.data) {
      return this.search(node.right, data);
    }

    //node found
    else {
      return node;
    }

  }

  inorderPrint(node) {
    if (node == null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorderPrint(node) {
    if (node == null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorderPrint(node) {
    if (node == null) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.data);
    }
  }
}
