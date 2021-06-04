import React from 'react';
import { useSelector } from 'react-redux';
import Human from './Human';
import Machine from './Machine';

const Player = ({image, userInfo, stats}) => {
  const vs = useSelector(state=>state.vsMode);
  
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
