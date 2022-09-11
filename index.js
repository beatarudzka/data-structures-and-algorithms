const array = [1, 2, 3, 4];

function productExceptItself(nums) {
  let rightProduct = [];
  let leftProduct = [];
  let result = [];

  // populate left product
  for (let i = 0; i < nums.length; i++) {
    // element przed pierwszym elementem do 1 (ponieważ to mnożenie)
    if (leftProduct.length === 0) {
      leftProduct.push(1);
    } else {
      leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (rightProduct.length === 0) {
      rightProduct.push(1);
    } else {
      rightProduct.unshift(rightProduct[0] * nums[i + 1]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(rightProduct[i] * leftProduct[i]);
  }
  return result;
}

const result = productExceptItself(array);
