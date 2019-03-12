// 🕒 Time Complexity:
// Access: O(N)
// Insertion: O(1)
// Deletion: O(1)
// Search: O(N)
// •
// ✅Efficient: Insertion & Deletion
// ❌Inefficient: Search
// ⭐Best for Scheduling Tasks
// •
// 📍Queue is a kind of abstract data type or collection in which the elements in the collection are kept in order. 📍The insertion of elements can only be done at the end/rear position, known as enqueue.
// 📍The removal of elements can only be done at the front position, known as dequeue.
// This makes it a First In First Out (FIFO) data structure.



class Queue {
  constructor(){
    this.list = [];
  }

  enqueue(value){
    this.list.push(value);
  }

  dequeue(){
    //remove the front element from the Queue
    if (this.list.length) {
      return this.list.shift();
    }

    //Underflow
    return "Queue is empty"
  }

  printQueue(){
    this.list.forEach(item=>{
      console.log(item);
    })
  }
}

var QQ= new Queue();

QQ.printQueue();

QQ.enqueue(1);
QQ.enqueue(2);
QQ.enqueue(3);


QQ.printQueue();
