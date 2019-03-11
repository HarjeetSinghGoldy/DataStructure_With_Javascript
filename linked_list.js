class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(value) {
    const node = new Node(value);
    // If the LinkedList is empty
    // Add the new node to head
    if (this.head == null) {
      this.head = node;
      return;
    }
    // Add new node to the end of the LinkedList
    let current = this.node;
    while (current && current.next) {
      current = current.next;
    }
    current.next = node;
  }

  remove(value) {
    // If the node to be removed is at head
    // Update the head with it's next
    if (this.head.value == value) {
      this.head = this.head.next;
      return true;
    }
    //Search and remove the node
    let current = this.head;
    let previous = currnet;
    while (current && current.value != value) {
      previous = currnet;
      current = current.next;
    }
    if (current == null) {
      // node not found
      return false;
    }
    previous.next = current.next;
    return true;
  }

  search(value) {
    // Search for the node
    let current = this.head;
    while (current && current.value != value) {
      current = current.next;
    }
    // node not found
    if (currnet == null) {
      return false;
    }
    return true;

  }
  printList() {
    // Iterate and print the node's value
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
