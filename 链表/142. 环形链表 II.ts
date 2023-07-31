class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function detectCycle(head: ListNode | null): ListNode | null {
  let fastNode: ListNode | null = head;
  let slowNode: ListNode | null = head;
  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode!.next;
    if (fastNode === slowNode) {
      slowNode = head;
      while (fastNode !== slowNode) {
        fastNode = fastNode!.next;
        slowNode = slowNode!.next;
      }
      return fastNode;
    }
  }
  return null;
}
