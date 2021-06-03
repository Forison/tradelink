const machine = {
  easy: (matrix) => {
    // select random row and col in the range of board
    const newRow = Math.floor(Math.random()*matrix.length);
    const newCol = Math.floor(Math.random()*matrix.length);
    return [newRow, newCol]; 
  },
  medium: (matrix) => {
    for (let i = 0; i < matrix.length; i ++) {
      for (let j = 0; j < matrix.length; j ++) {
        if (matrix[i][j] ==='X' && matrix[i][j+1] ==='.') {
          return [i, j+1];
        }else if (matrix[i][j] ==='X' && matrix[i+1][j] ==='.'){
          return [i+1, j];
        }else if (matrix[i][j] ==='X' && matrix[i+1][j+1] ==='.'){
          return [i+1, j+1];
        }
      }
    } 
  },
  hard: (matrix) => {
    
  }
}
export {machine};