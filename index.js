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
