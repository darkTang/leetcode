class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function reverseList(head: ListNode | null): ListNode | null {
  const dummyNode = new ListNode()
  let tempNode = head
  while(tempNode) {
    let tempNode1 = tempNode.next
    tempNode.next = dummyNode.next
    dummyNode.next = tempNode
    tempNode = tempNode1
  }
  return dummyNode.next
}
