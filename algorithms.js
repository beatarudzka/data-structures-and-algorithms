// https://leetcode.com/problems/roman-to-integer/
export const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const s = "XL";

export default function romanToInt(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i" && s[i + 1] === "v") {
      sum += 4;
      i++;
    } else if (s[i] === "i" && s[i + 1] === "x") {
      sum += 9;
      i++;
    } else if (s[i] === "x" && s[i + 1] === "l") {
      sum += 40;
      i++;
    } else if (s[i] === "x" && s[i + 1] === "c") {
      sum += 90;
      i++;
    } else if (s[i] === "c" && s[i + 1] === "d") {
      sum += 400;
      i++;
    } else if (s[i] === "c" && s[i + 1] === "m") {
      sum += 900;
      i++;
    } else {
      sum += romanNumbers[s[i]];
    }
  }
  return sum;
}

//  https://leetcode.com/problems/two-sum/

export function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]; //2
    let num2 = target - num1; //7
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
  }
}
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

const plusOneSecondSolution = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

let digits1 = [3, 2, 9];
let digits2 = [9];
let digits3 = [9, 9];

//https://leetcode.com/problems/product-of-array-except-self/

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

// string reversal

const reverseString = function (string) {
  let reversed = "";
  for (let letter of string) {
    reversed = letter + reversed;
  }
  return reversed;
};
const reversedString = reverseString("hello");
console.log(reversedString);

const string = "hello";
console.log(string.split("").reverse().join(""));

// check if palindrome

const checkIfPalindrome = function (string) {
  const palindrome = string.split("").reverse().join("");
  if (palindrome === string) return true;
  else return false;
};

// check how many times appears letter in string and return letter with max value

const amountLettersInString = function (string) {
  const obj = {};
  for (const letter of string) {
    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
  }
  let maxNum = 0;
  let maxLetter = "";
  for (const char in obj) {
    console.log(char);
    if (obj[char] > maxNum) {
      maxNum = obj[char];
      maxLetter = char;
    }
  }
  return obj;
};

const result = amountLettersInString("heeeeelo$$$");
