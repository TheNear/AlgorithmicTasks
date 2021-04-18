/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

*/

var topKFrequent = function (nums, k) {
  const numsMap = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const keys = Object.keys(numsMap).sort((a, b) => numsMap[b] - numsMap[a]);

  return keys.reduce((acc, cur, i) => {
    if (i < k) {
      acc.push(cur);
    }
    return acc;
  }, []);
};