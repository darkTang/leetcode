class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function hasCycle(head: ListNode | null): boolean {
  let slowNode: ListNode | null = head;
  let fastNode2: ListNode | null = head;
  while (fastNode2 && fastNode2.next) {
    slowNode = slowNode!.next;
    fastNode2 = fastNode2.next.next;
    if (slowNode === fastNode2) return true;
  }
  return false;
}
