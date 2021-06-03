import React from 'react';
import { useSelector } from 'react-redux';
import Human from './Human';
import Machine from './Machine';
import PropTypes from 'prop-types';

const Player = ({image, userInfo}) => {
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

Player.propTypes = {
  image: PropTypes.string,
  userInfo: PropTypes.object,
};

export default Player;
