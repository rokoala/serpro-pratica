const isPalindrome = (word) => {
  if (word.length <= 3) {
    return "?";
  }

  return word === word.split("").reverse().join("") ? "S" : "N";
};

export default isPalindrome;
