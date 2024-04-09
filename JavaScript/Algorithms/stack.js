class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.is_empty()) {
      this.items.pop();
    }
  }

  peek() {
    console.log(this.items[this.items.length - 1]);
  }

  is_empty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print_stack() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push("James");
stack.push("John");
stack.push("Doe");
stack.peek();
stack.pop();
stack.print_stack();
