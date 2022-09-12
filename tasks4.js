// We a given two arguments - string and set of letters.
// Are all letters from set in the given string and in the same order as in original set?
// The function has to return false/true value
// Input: abc, abracadabra
// Output: true

const checkTheOrder = (subs, string) => {
  let count = 0;
  let index = 0;
  for (let i = 0; i < subs.length; i += 1) {
    for (let j = index; j < string.length; j += 1) {
      if (subs[i] === string[j]) {
        count += 1;
        index = j;
        break;
      }
    }
  }
  if (count === subs.length) {
    return true;
  }
  return false;
};

console.log(checkTheOrder("abc", "abraaarba")); // expect false
console.log(checkTheOrder("abc", "abracadabra")); // expect true


// Strip Comments
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:
// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:
// apples, pears
// grapes
// bananas

const stripComments = (input, markers) => {
  let  arr = input.split('\n')
  for (let i = 0; i < markers.length; i += 1) {
    arr = arr.map((el) => {
      const index = el.indexOf(markers[i])
      if (index !== -1) {
        return el.substring(0, index)
      } else {
        return el.replace(/\s*$/, '')
      }
    })
  }
  return arr.join('\n').trim()
};

console.log(
  stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
  ])
); // expect "apples, pears\ngrapes\nbananas"