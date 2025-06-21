/*
To convert a Roman numeral to an integer:

    Read the Roman string from left to right.

    For each symbol:

        If the next symbol represents a larger value, subtract the current value.

        Otherwise, add the current value.

    Continue until the end of the string.

    Sum gives the integer result.
 */

var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;

  /* 
    s =  "MCMXCIV"

*/

  for (let i = 0; i < s.length; i++) {
    if (symbol[s[i]] < symbol[s[i + 1]]) {
      value = value - symbol[s[i]];
    } else {
      value = value + symbol[s[i]];
    }
  }

  return value;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
