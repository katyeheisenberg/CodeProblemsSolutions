// You are given an m x n char matrix board representing the game board where:
//     'M' represents an unrevealed mine,
//     'E' represents an unrevealed empty square,
//     'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
//     digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
//     'X' represents a revealed mine.

// You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').
// Return the board after revealing this position according to the following rules:
//     If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
//     If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
//     If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
//     Return the board when no more squares will be revealed.

// Input: board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
// Output: [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]


const updateBoard = (board: string[][], click: number[]): string[][] => {
  const height = board.length;
  const width = board[0].length;
  const x: number = click[1];
  const y: number = click[0];
  const dfs = (x: number, y: number) => {
    if (board[y][x] === 'M') {
      board[y][x] = 'X';
      return
    }
    const checked: [number, number][] = [];

    for (let curY = y - 1; curY <= y + 1; curY += 1) {
      for (let curX = x - 1; curX <= x + 1; curX += 1) {
        if (curX < width && curX >= 0 && curY < height && curY >= 0) {
          checked.push([curX, curY])
        }
      }
    };

    const minesAmount: number = checked.reduce((acc, [curX, curY]) => acc += board[curY][curX] === 'M' ? 1 : 0, 0);

    if (minesAmount > 0) {
      board[y][x] = minesAmount.toString();
    } else {
      board[y][x] = 'B';
      for (const [curX, curY] of checked) {
        if (board[curY][curX] === 'E') {
          dfs(curX, curY);
        }
      }
    };

  };
  dfs(x, y);
  return board;
};

updateBoard([["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]);