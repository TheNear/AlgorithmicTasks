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
  const result = []

  const subpermut = (cur, rest) => {
    if (cur.length === nums.length) {
      result.push(cur.slice());
    } else {
      for (let i = 0; i < rest.length; i++) {
        cur.push(rest[i]);
        subpermut(cur.slice(), rest.slice(0,i).concat(rest.slice(i + 1)));
        cur.pop();
      }
    }
  };

  subpermut([], nums);

  return result;
};

console.log(permute([1,2]));
