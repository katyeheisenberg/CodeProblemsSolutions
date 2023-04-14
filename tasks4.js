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

exports.checkTheOrder = checkTheOrder;



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
  let arr = input.split("\n");
  for (let i = 0; i < markers.length; i += 1) {
    arr = arr.map((el) => {
      const index = el.indexOf(markers[i]);
      if (index !== -1) {
        return el.substring(0, index);
      } else {
        return el.replace(/\s*$/, "");
      }
    });
  }
  return arr.join("\n").trim();
};


// Next smaller number with the same digits
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
//     some tests will include very large numbers.
//     test data only employs positive integers.

const minify = (n) =>
  n
    .toString()
    .split("")
    .sort()
    .join("")
    .replace(/^(0+)([1-9])/, "$2$1");

function nextSmaller(n) {
  const min = minify(n);
  for (let i = n - 1; i >= min; i -= 1) {
    if (minify(i) === min) {
      return i;
    }
  }

  return -1;
};

exports.nextSmaller = nextSmaller;



// Ttitle Case
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case)
// or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
//     First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
//     Second argument: the original string to be converted.

const capitalize = ([firstChar, ...rest]) =>
  firstChar.toUpperCase() + rest.join("");

function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }
  const minorWordArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  return title
    .toLowerCase()
    .split(" ")
    .map((item, index) => {
      if (minorWordArr.indexOf(item) === -1 || index === 0) {
        return capitalize(item);
      }
      return item;
    })
    .join(" ");
}

exports.titleCase = titleCase;




// Factorial
// To execute factorial of number not using recursion method

const factorial = (nmb) => {
  let result = 1;
  while (nmb > 1) {
    result = result * nmb;
    nmb -= 1;
  }
  return result;
};

exports.factorial = factorial;


// Function that should merge all the given arrays that are placed in one array and to sort all the numbers from them

const merge = (arg1, arg2) => {
  let count = 0;
  let count2 = 0;
  let result = [];
  for (let i = 0; i < arg1.length + arg2.length; i += 1) {
    if (count === arg1.length) {
      result.push(arg2[count2]);
      count2 += 1;
      continue;
    }
    if (count2 === arg2.length) {
      result.push(arg1[count]);
      count += 1;
      continue;
    }
    if (arg1[count] <= arg2[count2]) {
      result.push(arg1[count]);
      count += 1;
      continue;
    }
    result.push(arg2[count2]);
    count2 += 1;
  }
  return result;
};

const sortedArr = (arr) => {
  return arr.reduce((acc, rec) => merge(acc, rec), []);
};

exports.sortedArr = sortedArr;



// Find the biggest number in the array with arrays

const biggestNmbArr = (array) => {
  return array
    .map((it) => {
      return it.reduce((acc, rec) => Math.max(acc, rec));
    })
    .reduce((acc, rec) => Math.max(acc, rec));
};

exports.biggestNmbArr = biggestNmbArr;


// Find words with specific letters in it in the array

const findWord = (element, wordArray) => {
  return wordArray.reduce((acc, rec) => {
    if (acc === "" && rec.includes(element)) return rec;
    if (rec.includes(element)) {
      return `${acc}, ${rec}`;
    }
    return acc;
  }, "");
};

exports.findWord = findWord;


// To count the number of word in the given array

const nmbArrWord = (arr) => {
  if (arr.length === 0) return "It looks like there's no words in the array";
  return arr.reduce((acc, rec) => {
    return {
      ...acc,
      [rec]: (acc[rec] ?? 0) + 1,
    };
  }, {});
};

exports.nmbArrWord = nmbArrWord;
