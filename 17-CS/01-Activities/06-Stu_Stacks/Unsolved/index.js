// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container = []) {
    this.container = container;
  }

  addToStack(element) {
    return this.container.push(element);
  }

  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
