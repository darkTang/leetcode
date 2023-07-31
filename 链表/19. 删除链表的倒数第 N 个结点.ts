class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let tempNode: ListNode | null = head;
//   let size = 0;
//   while (tempNode) {
//     size++;
//     tempNode = tempNode.next;
//   }
//   if (n === size) {
//     head = head!.next;
//   } else {
//     tempNode = head;
//     for (let i = 1; i < size - n; i++) {
//       tempNode = tempNode!.next;
//     }
//     tempNode!.next = tempNode!.next!.next;
//   }
//   return head;
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slowNode = head,
    fastNode = head;
  while (n--) {
    fastNode = fastNode!.next;
  }
  if (fastNode === null) {
    head = head!.next;
  } else {
    while (fastNode!.next) {
      slowNode = slowNode!.next;
      fastNode = fastNode!.next;
    }
    slowNode!.next = slowNode!.next!.next;
  }
  return head;
}
