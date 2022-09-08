// check if palindrome

const checkIfPalindrome = function (string) {
  const palindrome = string.split("").reverse().join("");
  if (palindrome === string) return true;
  else return false;
};
