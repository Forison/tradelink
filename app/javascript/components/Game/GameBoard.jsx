import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import GameTile from './GameTile';
import {gameLogic} from '../../lib/gameLogic';
import { machine } from '../../lib/machine';
import { useSelector } from 'react-redux';
import {GameRoomChannel }from '../../channels/game_room_channel';
import { countPlays } from '../../lib/countPlay';
import { saveResult } from '../../lib/saveResult';

const GameBoard = () => {
  let initialState = { 
    board:  [
    ['.','.','.'],
    ['.','.','.'],
    ['.','.','.'],
    ],
    message: '',
    endGame: false,
    waiting: false,
    lastPlayer: ''
  };

  const [state, setState] = useState(initialState);
  const [turn, setTurn] = useState(0);
  const vsMachineMode = useSelector(state=>state.vsMode);
  const {user} = useSelector(state=>state.user);
  const {opponent} = useSelector(state=>state.opponent);
  let {machineLevel} = useSelector(state=> state.machineLevel);
  
  const handleClick = (row, col) => {
    if(!state.waiting)
       handleUserPlay(row, col, user.username);
  }

  const handleMachinePlay = (level) => {
    const{easy, medium, hard} = machine;
    const {validMove, results} = gameLogic;
    let {board} = state;
    let copyState = [...board];
    let mark = '';
    mark = 'O'; 
    setTimeout(() => {
      switch (level) {
        case 'Easy':
          let [row, col] = easy(board);
          while(!validMove(copyState, row, col)){
            [row, col] = easy(board);
          }
          copyState[row][col] = mark;
          break;
        case 'Medium':
          [row, col] = medium(board);
          while(!validMove(copyState, row, col)){
            [row, col] = medium(board);
          }
          copyState[row][col] = mark;
          break;
        default:
          [row, col] = hard(board);
          while(!validMove(copyState, row, col)){
            [row, col] = hard(board);
          }
          copyState[row][col] = mark;
          break;
      }
      
    setState({
      ...state,
      [board]: copyState,
      message: '',
      waiting: false
    });
    // check if machine hasWon or otherwise
    let hasWon = results(copyState, mark);
     
    if (hasWon) {
      setState({
        ...state,
        message: 'Tradelink has won',
        endGame: true,
      });
      //stop game play, i
    }else if (!hasWon && turn===4){
      setState({
        ...state,
        message: `${turn === 4 ? 'The game ended in a draw' : ''}`,
        endGame: true,
      });
      //stop game play
    }

    }, 3000);
  }
   
  const handleUserPlay = async(row, col, playerName) => {
    const {endGame, board} = state;
    const {results, validMove} = gameLogic;
    let mark = '';
    if (vsMachineMode.vsMode === 'Human') {
      mark = countPlays(board)%2 === 0 ? 'X' : 'O';  
    } else {
      mark = 'X';
    }
    
    let copyState = [...board];
    // check if the move being made is valid
    if(validMove(copyState, row, col)){
      copyState[row][col] = mark;
      setState({...state, board: copyState, message: `is Playing`}); 
      let hasWon = results(copyState, mark);
      if (hasWon) {
        setState({
          ...state,
          [board]: copyState,
          waiting: true,
          message: `${playerName} has won`,
          endGame: true,
        });
        // save results and clear board
        let gameResult = {opponent: opponent.username, winner: playerName};
        saveResult(gameResult);
        setTimeout(() => {
          setState(initialState);
        }, 3000);
      }else if (!hasWon && turn===4){
        setState({
          ...state,
          message: 'The game ended in a draw',
          endGame: true,
        });
        saveResult(gameResult);
        setTimeout(() => {
          setState(initialState);
        }, 3000);
      }else if (!hasWon && turn !== 4){
        // intiatialize machine play 
        if(vsMachineMode.vsMode === 'Machine' && !endGame)
          handleMachinePlay(machineLevel);
        
          //initialize human play here 
        if(vsMachineMode.vsMode === 'Human' && !endGame)
          GameRoomChannel.speak(state.board);
      }
    }else{
      setState({...state, message: 'selected tile is already occupied'});
      setTimeout(() => {
        setState({...state, message: ''});  
      }, 3000);
    }
    setTurn(prevTurn=> prevTurn + 1);
  }

  GameRoomChannel.received = (data) => setState({...state, board: data.board});

  return (
    <div className="board mx-auto shadow-lg mt-5 p-2">
      <span className={`${state.message === '' ? 'invisible': 'visible'} p-0 alert alert-info`} role="alert">
        {state.message}
      </span>
        {
          state.board.map((markings, gameRow) => (
            <div key={shortid.generate()}>
              <div className="container">
                <div className="row">
                  {markings.map((marker,gameCol) => (
                    <div className="col-4 p-0" key={shortid.generate()}>
                      <GameTile mark={marker} tileClick={handleClick} row={gameRow} col={gameCol}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
        <br />
    </div>
  )
}
export default GameBoard;
