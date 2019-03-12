// 🕒 Time Complexity:
// Access: O(N)
// Insertion: O(1)
// Deletion: O(1)
// Search: O(N)
// •
// ✅Efficient: Insertion & Deletion
// ❌Inefficient: Access Time
// ⭐Can be used in problems like TOH, balancing brackets, order conversion, etc.
// •
// 📍Stack is a linear data structure which follows a particular order for the operations performed on it. It follows a Last In First Out (LIFO) or First In Last Out (FILO) order.
// •
// 📍Push: The item can only be pushed on the top of the stack.
// 📍Pop: The item can only be removed from the top of the stack.
// 📍Peek: Get the top element of the stack.


class Stack{
  constructor(){
    this.list = [];
  }

  push(value){
    this.list.push(value)
  }

  pop(){
    if (this.list.length) {
      return this.list.pop();
    }
    return "Stack is empty"
  }

  peek(){
    if (this.list.length) {
      return this.list[this.list.length -1]
    }
    return "Stack is empty"
  }

  printStack(){
    this.list.forEach(item=>{
      console.log(item)
    })
  }
}

var SS = new Stack();

SS.push(1)
SS.push(2)
SS.push(3)
SS.push(4)
SS.push(5)

SS.printStack();
