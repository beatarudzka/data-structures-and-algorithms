//https://leetcode.com/problems/product-of-array-except-self/

const array = [1, 2, 3, 4];

const productExceptItself = function (nums) {
  let result = 1;
  let numArray = [];
  for (let i = 0; i < nums.length; i++) {
    result = nums[i] * result;
  }
  for (let i = 0; i < nums.length; i++) {
    numArray.push(result / nums[i]);
  }
};

const product = productExceptItself(array);
