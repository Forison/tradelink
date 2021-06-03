const countPlays = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix.length; j ++) {
      if (matrix[i][j] ==='X' || matrix[i][j]==='O') {
        count+=1;
      }
    }
  }
  return count;
}

export { countPlays };