class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

// 默认 _ 表示为 私有变量
class MyLinkedList {
  constructor(
    private _size: number = 0,
    private _head: ListNode | null = null
  ) {}

  get(index: number): number {
    if (index < 0 || index >= this._size) {
      return -1;
    } else {
      return this._getCurNode(index).val;
    }
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val, this._head);
    this._head = newNode;
    this._size++;
  }

  addAtTail(val: number): void {
    const lastNode = this._getCurNode(this._size - 1);
    lastNode.next = new ListNode(val);
    this._size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this._size) return;
    if (index === this._size) this.addAtTail(val);
    else if (index === 0) this.addAtHead(val);
    else {
      const preNode = this._getCurNode(index - 1);
      const newNode = new ListNode(val);
      newNode.next = preNode.next;
      preNode.next = newNode;
    }
    this._size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
      const curNode = this._getCurNode(index);
      this._head = curNode.next
    } else {
      const preNode = this._getCurNode(index-1)
      preNode.next = preNode.next!.next
    }
    this._size--
  }

  private _getCurNode(index: number): ListNode {
    let curNode = new ListNode(0, this._head);
    for (let i = 0; i <= index; i++) {
      curNode = curNode.next!;
    }
    return curNode;
  }
}

const obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtTail(3);
obj.addAtIndex(2, 4);
obj.deleteAtIndex(3)
console.log(obj.get(2));
