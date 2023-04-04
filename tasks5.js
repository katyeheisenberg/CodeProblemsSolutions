// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isValidAnagram = (s, t) => {
  const count = {}
  for(let i = 0; i < s.length; i += 1) {
    if(!count[s[i]]) count[s[i]] = 0
    if(!count[t[i]]) count[t[i]] = 0
    count[s[i]] += 1
    count[t[i]] -= 1
  }
  if(s.length !== t.length) return false
  for(let letter in count) {
    if(count[letter] !== 0) return false
  }
  return true
}
console.log(isValidAnagram("anagram", "nagaram")); // expect true
console.log(isValidAnagram("bom", "tom")); // expect false

exports.isValidAnagram = isValidAnagram;
