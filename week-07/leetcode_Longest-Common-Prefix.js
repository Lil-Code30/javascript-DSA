// var longestCommonPrefix = function (strs) {
//   let k = 0;
//   let currentWord = strs[k];
//   let test = "";
//   let output = "";

//   strs.forEach((word) => {
//     if (word === currentWord) {
//       return;
//     } else {
//       for (let i = 0; i < currentWord.length; i++) {
//         for (let j = 0; j < word.length; j++) {
//           if (word[j] === currentWord[i]) {
//             test = test.concat(word[j]);
//             if (test.indexOf(word[j]) !== test.lastIndexOf(word[j])) {
//               output = output.concat(word[j]);
//             }
//           }
//         }
//       }
//     }
//   });
//   return output;
// };
/*
Using JavaScript indexOf() and lastIndexOf() 
Methods log(repeat); 
indexOf(str[i]) returns the first occurrence of the character.
lastIndexOf(str[i]) returns the last occurrence of the character. 
If these indices differ, it means the character repeats.


*/

var longestCommonPrefix = function (strs) {
  let k = 0;
  let currentWord = strs[k];
  let output = "";
  let result = new Set();

  if (strs.length === 1) {
    return strs[0];
  }

  strs.forEach((word) => {
    if (word === currentWord) {
      return;
    } else {
      for (let i = 0; i < currentWord.length; i++) {
        for (let j = 0; j < word.length; j++) {
          if (word[j] === currentWord[i]) {
            output = output.concat(word[j]);
          }
        }
      }
    }
  });

  for (let x = 0; x < output.length; x++) {
    if (output.indexOf(output[x]) !== output.lastIndexOf(output[x])) {
      result.add(output[x]);
    }
  }

  console.log(output);
  return [...result].join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log("***********************");
console.log(longestCommonPrefix(["ca", "carrace", "car"]));
console.log("***********************");
console.log(longestCommonPrefix(["fwer", "fight", "fw"]));
console.log("***********************");
console.log(longestCommonPrefix(["a"]));

console.log("***********************");
console.log(longestCommonPrefix(["ab", "a"]));
