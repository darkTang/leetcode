class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode = new ListNode(0, head);
  let tempNode = dummyNode;
  while (tempNode && tempNode.next && tempNode.next.next) {
    let curNode1 = tempNode.next;
    let curNode2 = tempNode.next.next;
    let curNode3 = tempNode.next.next.next;
    tempNode.next = curNode2;
    curNode2.next = curNode1;
    curNode1.next = curNode3;
    tempNode = curNode1;
  }
  return dummyNode.next;
}
