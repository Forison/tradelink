import React from 'react';
import { useSelector } from 'react-redux';
import Human from './Human';
import Machine from './Machine';

const Player = ({image, userInfo}) => {
  const vs = useSelector(state=>state.vsMode);
  const machineInfo = {username: 'Tradelink bot', email: 'bot@bot'};
  // bug fixer after submission for review 
  userInfo = userInfo === undefined ? machineInfo : userInfo
  
  if(userInfo.email !== 'bot@bot'){
    return (
      <>
        <Human image={image} userInfo={userInfo}/>
      </>
    )
    
  } else{

    return (
      <>
        <Machine image={image} userInfo={userInfo}/>
      </>
    )
  }
}
export default Player;
