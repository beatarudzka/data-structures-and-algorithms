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
