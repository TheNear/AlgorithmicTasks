/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

*/

const subsets = (nums) => {
    const result = [[]];

    const createSubset = (cur, rest) => {
      if (!rest.length) return;
      for (let i = 0; i < rest.length; i++) {
        const subResult = [...cur, rest[i]];
        result.push(subResult);
        createSubset(subResult, rest.slice(i + 1))
      }
    }

    createSubset([] , nums);

    return result;
};

