var permute = function(nums) {
  const res = [];
  backtrack(nums, res);
  return res;
};

function backtrack(nums, res, n = 0) {
  console.log(nums, nums.length - 1 === n);
  if (n === nums.length - 1) {
      res.push(nums.slice(0));
      return;
  }
  for (let i = n; i < nums.length; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]];
      backtrack(nums, res, n + 1);
      [nums[i], nums[n]] = [nums[n], nums[i]];
  }
}

permute([1,2,3]);