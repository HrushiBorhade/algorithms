export class Node<T> {
  value?: T;
  next?: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = new Node(item);
    const head = this.head;
    this.length++;
    if (!head) {
      this.head = node;
      return;
    }
    node.next = head;
    this.head = node;
  }

  pop(): T | undefined {
    const head = this.head;
    if (!head) return undefined;
    this.head = head.next;
    this.length--;
    if (this.length === 0) {
      this.head = undefined;
    }
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
