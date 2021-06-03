import React from 'react';

const GameTile = ({mark, row, col, tileClick}) => {
  return (
    <div className={`${ mark==='.' ? `text-white` : ``} tile text-center`} onClick={()=> tileClick( row, col)}>{mark}</div>
  )
}
export default GameTile;
