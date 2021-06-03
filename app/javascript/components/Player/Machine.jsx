import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Machine = ({image, userInfo}) => {
  const dispatch = useDispatch();
  const machineLevel = useSelector(state=>state.machineLevel);
  const [levelPointer, setLevelPointer] = useState(0);

  const changeMachineLevel = () => {
    const levels = ['Easy', 'Medium', 'Hard'];
    levelPointer >= 2 ? setLevelPointer(0) : setLevelPointer(levelPointer+1);
    dispatch({type: 'CHANGE_MACHINE_LEVEL', level: levels[levelPointer]}); 
  }
  
  return (
    <div className="card pb-3 player-card">
      <img src={image} className="card-img" alt="player_image" />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{userInfo.username}</h5>
        <small className="small-text">{userInfo.email}</small>
        <p className="card-text">Select difficulty level</p>
        <div>
          <button 
            className="col-12 btn btn-secondary d-block mx-auto text-capitalized" 
            onClick={()=>changeMachineLevel()}>
            {machineLevel.machineLevel} mode
          </button>
        </div>
      </div>
    </div>
  )
}
export default Machine;