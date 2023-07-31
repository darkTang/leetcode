class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummyNode = new ListNode(0, head);
  let tempNode = dummyNode;
  while (tempNode.next) {
    if (tempNode.next.val === val) {
      tempNode.next = tempNode.next.next;
    } else {
      tempNode = tempNode.next;
    }
  }
  return dummyNode.next;
}
