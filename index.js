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
