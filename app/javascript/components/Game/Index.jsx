import React, { useEffect } from 'react';
import GameBoard from './GameBoard';
import Player from '../Player/Player';
import Human from '../../../assets/images/cm.png';
import Opponent from '../../../assets/images/me.png';
import Machine from '../../../assets/images/machine.png';
import { useDispatch, useSelector } from 'react-redux';
import userRecords from '../../redux/action/userRecordsReducer';

const Index = () => {
  const newUser = useSelector(state=>state.user);
  const machineInfo = {username: 'Tradelink bot', email: 'bot@bot'};
  const vs = useSelector(state=>state.vsMode);
  const {opponent} = useSelector(state=>state.opponent);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRecords());
  }, [])
  console.log(vs)
  return (
    <div className="container-fluid">
      <h1 className="tic-tac-toe text-center position-absolute">TIC TAC TOE </h1>
      <div className="row">
        <div className="col-3 p-0">
          <Player image={Human} userInfo={newUser.user}/>
        </div>
        <div className="col-6">
          <GameBoard />
        </div>
        <div className="col-3 p-0">
          {vs.vsMode === 'Machine' ? 
            <Player image={Machine} userInfo={machineInfo} />
          : 
            <Player image={Opponent} userInfo={opponent} />
          }
        </div>
      </div>
    </div>
  )
}

export default Index;
