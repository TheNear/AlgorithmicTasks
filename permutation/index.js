/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

*/

const permute = (nums) => {
  if (nums.length < 2) return [nums];
  let flatIndex = nums.length - 2 > 0 ? nums.length - 2 : 0;
  const subPermute = (tail, head) => {
    if (tail.length < 2 ) return head ? head.concat(tail) : tail;
    return tail.reduce((acc, cur, i, arr) => {
      const arrTail = [...arr];
      const arrHead = head ? head.concat(arrTail.splice(i, 1)) : arrTail.splice(i, 1);
      acc.push(subPermute(arrTail,arrHead));
      return acc;
    }, []);
  }
  return subPermute(nums).flat(flatIndex);
};
