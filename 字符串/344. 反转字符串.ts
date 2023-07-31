function reverseString(s: string[]): void {
  let slowIndex = 0;
  let fastIndex = s.length - 1;
  while (slowIndex < fastIndex) {
    [s[slowIndex], s[fastIndex]] = [s[fastIndex], s[slowIndex]];
    slowIndex++
    fastIndex--
  }
}
