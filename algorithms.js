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

export default function romanToInt(s) {
  const splitArr = s.toLowerCase().split("");
  let sum = 0;
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === "i" && splitArr[i + 1] === "v") {
      sum += 4;
      i++;
    } else if (splitArr[i] === "i" && splitArr[i + 1] === "x") {
      sum += 9;
      i++;
    } else if (splitArr[i] === "x" && splitArr[i + 1] === "l") {
      sum += 40;
      i++;
    } else if (splitArr[i] === "x" && splitArr[i + 1] === "c") {
      sum += 90;
      i++;
    } else if (splitArr[i] === "c" && splitArr[i + 1] === "d") {
      sum += 400;
      i++;
    } else if (splitArr[i] === "c" && splitArr[i + 1] === "m") {
      sum += 900;
      i++;
    } else {
      sum += romanNumbers[s[i]];
    }
  }
  return sum;
}
