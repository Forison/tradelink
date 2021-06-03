import React from 'react';
import GameBoard from './GameBoard';
import Player from '../Player/Player';
import Human from '../../../assets/images/cm.png';
import Opponent from '../../../assets/images/me.png';
import Machine from '../../../assets/images/machine.png';
import { useSelector } from 'react-redux';

const Index = () => {
  const newUser = useSelector(state=>state.user);
  const records = useSelector(state=>state.records);
  const machineInfo = {username: 'Tradelink bot', email: 'bot@bot'};
  const vs = useSelector(state=>state.vsMode);
  const {opponent} = useSelector(state=>state.opponent);
  
  return (
    <div className="container-fluid">
      <h1 className="tic-tac-toe text-center position-absolute">TIC TAC TOE </h1>
      <div className="row">
        <div className="col-3 p-0">
          <Player image={Human} userInfo={newUser.user} stats= {records} />
        </div>
        <div className="col-6">
          <GameBoard />
        </div>
        <div className="col-3 p-0">
          {vs.vsMode === 'Machine' ? 
            <Player image={Machine} userInfo={machineInfo} stats= {records} />
          : 
            <Player image={Opponent} userInfo={opponent} stats= {records} />
          }
        </div>
      </div>
    </div>
  )
}

export default Index;
