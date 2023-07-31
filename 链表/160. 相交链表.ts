class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let tempNodeA = headA;
  let tempNodeB = headB;
  while ( tempNodeA !== tempNodeB) {
    if (tempNodeA === null) {
      tempNodeA = headB;
    } else {
      tempNodeA = tempNodeA!.next;
    }
    if (tempNodeB === null) {
      tempNodeB = headA;
    } else {
      tempNodeB = tempNodeB!.next;
    }
  }
  return tempNodeA
}
