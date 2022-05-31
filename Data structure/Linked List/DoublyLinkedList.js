class Node {
  constructor(element) {
    this.prev = null;
    this.element = element;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtEnd(element) {
    let newNode = new Node(element);

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return newNode;
    }

    this.head = this.tail = newNode;
    this.length++;
    return newNode;
  }

  insertAtStart(element) {
    let newNode = new Node(element);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAtIndex(element, index) {
    let newNode = new Node(element);
    if (index <= 0) return newNode;

    if (index === 1) {
      this.insertAtStart(element);
      return newNode;
    } else if (index >= this.length) {
      this.insertAtEnd(element);
      return newNode;
    }

    let current = this.head;

    let count = 0;
    let prev;
    while (current.next) {
      count++;
      prev = current.prev;
      if (count === index) break;
      current = current.next;
    }

    newNode.prev = prev;
    newNode.next = current;
    current.prev = newNode;
    prev.next = newNode;
    this.length++;
  }

  getFirstElement() {
    return this.head.element;
  }

  getLastElement() {
    return this.tail.element;
  }

  removeElement(index) {
    let current = this.head;
    let count = 0;
    let prev;
    while (current.next) {
      count++;
      prev = current.prev;
      current = current.next;
      if (count === index) break;
    }

    prev.next = current;
    current.prev = prev;
  }

  removeFirstElement() {
    this.head = this.head.next;
  }

  removeLastElement() {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result = result + " " + current.element;
      current = current.next;
    }
    console.log(result);
  }

  size() {
    console.log(`length: ${this.length}`);
  }
}

// let list = new DoublyLinkedList();

// list.insertAtEnd(2);
// list.insertAtEnd(3);
// list.insertAtEnd(4);
// list.insertAtStart(1);
// list.insertAtStart(0);
// list.print();
// list.removeLastElement();
// list.print();
// list.removeFirstElement();
// list.print();
// list.removeElement(2);
// list.print();
