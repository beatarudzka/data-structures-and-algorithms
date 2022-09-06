//https://leetcode.com/problems/plus-one/

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const plusOne = function (digits) {
  let numbers = String(digits.join(""));
  numbers = BigInt(numbers);
  numbers++;
  const numbArr = String(numbers)
    .split("")
    .map((el) => {
      return Number(el);
    });
  return numbArr;
};

let digitsPlusOne = plusOne(digits);
