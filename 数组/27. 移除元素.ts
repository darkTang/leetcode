function removeElement(nums: number[], val: number): number {
  let fastIndex = 0,
    slowIndex = 0;
  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  return slowIndex;
}
