var isPalindrome = function (x) {
  x = String(x);

  let reverseX = x.split("").reverse().join("");

  if (reverseX === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
