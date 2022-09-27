class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addElement(element) {
    let node = new Node(element);
    let current = this.head;

    if (current == null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result = result + " " + current.value;
      current = current.next;
    }
  }

  delete(n) {
    let size = 1;
    let current = this.head;
    while (current.next) {
      size++;
      current = current.next;
    }

    let i = 0;
    current = this.head;
    let prev = null;
    while (1) {
      i++;

      if (i === size - (n - 1)) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        return this.head;
      }
      prev = current;
      current = current.next;
    }
  }
}
