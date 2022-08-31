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

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];


const isValidSudoku = function(board) {
    const isUsedInRow = new Array(9).fill(0).map(_ => new Array())
    const isUsedInCol = new Array(9).fill(0).map(_ => new Array())
    const isUsedInSub = new Array(9).fill(0).map(_ => new Array())

    for (let i = 0; i < 9; i += 1) {
        for (let h = 0; h < 9; h += 1) {
            const cell = board[i][h]
            if (cell === '.') continue
            const subBoxIndex = Math.floor(i / 3) + Math.floor(h / 3) * 3
            if (isUsedInRow[i][cell] || isUsedInCol[h][cell] || isUsedInSub[subBoxIndex][cell]) {
                return false
            }
            isUsedInRow[i][cell] = true
            isUsedInCol[h][cell] = true
            isUsedInSub[subBoxIndex][cell] = true
        }
    }

    return true
}

console.log(isValidSudoku(board))
