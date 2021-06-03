const gameLogic = {
  boardFull: turn => {
    return turn === 9 ? true : false;
  },
  
  validMove: (matrix, row, col) => {
    return matrix[row][col] === '.' ? true : false;
  },

  results: (matrix, mark) => {
    const row1 = matrix[0][0] === mark && matrix[0][1] === mark && matrix[0][2] === mark;
    const row2 = matrix[1][0] === mark && matrix[1][1] === mark && matrix[1][2] === mark;
    const row3 = matrix[2][0] === mark && matrix[2][1] === mark && matrix[2][2] === mark
  
    const col1 = matrix[0][0] === mark && matrix[1][0] === mark && matrix[2][0] === mark;
    const col2 = matrix[0][1] === mark && matrix[1][1] === mark && matrix[2][1] === mark;
    const col3 = matrix[0][2] === mark && matrix[1][2] === mark && matrix[2][2] === mark;
  
    const diagonal1 = matrix[0][0] === mark && matrix[1][1] === mark && matrix[2][2] === mark;
    const diagonal2 = matrix[0][2] === mark && matrix[1][1] === mark && matrix[2][0] === mark;

    if (row1 || row2 || row3 || col1 || col2 || col3 || diagonal1 || diagonal2) {
      return true;
    }
    return false;
  },
}

export { gameLogic };