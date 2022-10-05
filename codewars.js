// Maximum Depth of Nested Brackets 6kyu

// Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.

// Example:
// String: A  A  (  X  X  (  (  Y  Y  )  )  (  U  )  )
// Level:        1        2   3       3  2  2     2  1

// Therefore, answer: { "YY" } since the substring "YY" is locked at the deepest level.
// If several substring are at the deepest level, return them all in a list in order of appearance.

// The string includes only uppercase letters, parenthesis '(' and ')'.
// If the input is empty or doesn't contain brackets, an array containing only the original string must be returned.

const maxDepthBrackets = (s) => {
  let result = [s]
  let start = 0
  let deepest = 0
  let level = 0
  for (let i = 0; i < s.length; i += 1) {
    let item = s[i]
    if(item === '(') {
      level += 1
      start = i
    }
    if(item === ')') {
      if (level === deepest) {
        result = [ ...result, s.slice(start + 1, i)]
      }
      level -= 1
    }

    if (level > deepest) {
      deepest = level
      result = []
    }
  }
  return result
}

console.log(maxDepthBrackets("((AAX(AB)(UP)F(Z))(HH))")); // expect ['AB', 'UP', 'Z']
console.log(maxDepthBrackets("AAA")); // expect ["AAA"]
console.log(maxDepthBrackets("")); // expect [""]


// Arrays Similar 6kyu
// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements,
//  and the same number of occurrences of elements.
// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false


const arraysSimilar = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false
  let arr1Sorted = [ ...arr1].sort()
  let arr2Sorted = [ ...arr2].sort()
  return arr1Sorted.every((item, index) => item === arr2Sorted[index])
}

console.log(arraysSimilar([1, 2, 2, 3, 4], [1, 2, 3, 4])); // expect false
console.log(arraysSimilar([1, 2, 3, "4"], [1, 2, "4", 3])); // expect true