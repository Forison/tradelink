import React from 'react';
import PropTypes from 'prop-types';

const GameTile = ({mark, row, col, tileClick}) => {
  return (
    <div className={`${ mark==='.' ? `text-white` : ``} tile text-center`} 
      onClick={()=> tileClick( row, col)}>
      {mark}
    </div>
  )
}

GameTile.propTypes = {
  mark: PropTypes.string,
  row: PropTypes.number,
  col: PropTypes.number,
  tileClick: PropTypes.func
};

export default GameTile;
