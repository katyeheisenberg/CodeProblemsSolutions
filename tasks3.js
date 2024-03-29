// Valid sudoku 36.
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// Output: true

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
//     board.length == 9
//     board[i].length == 9
//     board[i][j] is a digit 1-9 or '.'.

const isValidSudoku = function (board) {
  const isUsedInRow = new Array(9).fill(0).map((_) => new Array());
  const isUsedInCol = new Array(9).fill(0).map((_) => new Array());
  const isUsedInSub = new Array(9).fill(0).map((_) => new Array());

  for (let i = 0; i < 9; i += 1) {
    for (let h = 0; h < 9; h += 1) {
      const cell = board[i][h];
      if (cell === ".") continue;
      const subBoxIndex = Math.floor(i / 3) + Math.floor(h / 3) * 3;
      if (
        isUsedInRow[i][cell] ||
        isUsedInCol[h][cell] ||
        isUsedInSub[subBoxIndex][cell]
      ) {
        return false;
      }
      isUsedInRow[i][cell] = true;
      isUsedInCol[h][cell] = true;
      isUsedInSub[subBoxIndex][cell] = true;
    }
  }

  return true;
};

exports.isValidSudoku = isValidSudoku;



// Minimum number of symbols
// Create a function which will return the minima number of symbols that must be deleted in order to get a palindrome word

const word3 = "aaabbaaa099";

const minSym = (word3, n = 0) => {
  for (let i = 0; i < word3.length / 2; i += 1) {
    if (word3[i] !== word3[word3.length - 1 - i]) {
      const res1 = minSym(word3.slice(i + 1, word3.length - 1 - i), n + 1);
      const res2 = minSym(word3.slice(i, word3.length - 2 - i), n + 1);
      return Math.min(res1, res2);
    }
  }
  return n;
};


// Palindrome
// Another solution

const palFunc = (word4) => {
  let backward = "";
  let index = word4.length - 1;
  while (index >= 0) {
    backward += word4[index];
    index -= 1;
  }
  return word4.toLocaleLowerCase() === backward.toLocaleLowerCase();
};

exports.palFunc = palFunc;



// Palindrom2 (another solution)
// Check if we delete or remove one symbol from the given wrod would it be a palindrom

const palDelRem = (word5) => {
  const isTheSame = (text) => {
    let backward = "";
    let index = text.length - 1;

    while (index >= 0) {
      backward += text[index];
      index -= 1;
    }
    return text.toLowerCase() === backward.toLowerCase();
  };

  if (isTheSame(word5)) {
    return true;
  }

  let index = 1;
  let result = false;

  while (index <= word5.length) {
    result = isTheSame(word5.slice(0, index - 1) + word5.slice(index));
    if (result) {
      break;
    }
    index += 1;
  }

  return result;
};

exports.palDelRem = palDelRem;


// Palindrome task number 4(sk solution)
// create a function wich will return the number of letters that must be deleted to get palindrom word.
// the function has to work with words written in lower and in upper case similarly

const isPlaindrom4 = (word6, count = 0) => {
  let str = word6.toLowerCase();

  if (count > 0) {
    const str1 = str.slice(0, str.length - 1);
    const str2 = str.slice(1);

    const count1 = isPlaindrom4(str1);
    const count2 = isPlaindrom4(str2);

    str = count1 < count2 ? str1 : str2;
  }

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      count += 1;
      const slicedStr = str.slice(i, str.length - i);
      return isPlaindrom4(slicedStr, count);
    }
  }
  return count;
};

exports.isPlaindrom4 = isPlaindrom4;
