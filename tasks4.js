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