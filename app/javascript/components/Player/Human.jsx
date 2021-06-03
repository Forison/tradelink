import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal'

const Human = ({userInfo, image}) => {
  const dispatch = useDispatch();
  const vs = useSelector(state=>state.vsMode);
  const currentUser = useSelector(state=>state.user);
  const [modePointer, setModePointer] = useState(0);

  const changeVsMode = () => {
    const modes = ['Human', 'Machine'];
    modePointer >= 1 ? setModePointer(0) : setModePointer(modePointer+1);
    dispatch({type: 'CHANGE_GAME_MODE', mode: modes[modePointer]}); 
  }
  return (
    <div className="card pb-3">
      <img src={image} className="card-img" alt="player_image" />
      <div className="card-body">
        <h5 className="card-title">{userInfo.username}{' '}
            <br/><small className="small-text">{userInfo.email}</small>
        </h5>
        <small>Select game mode</small>
        <button 
          className={`${vs.vsMode==='Human' ? 'btn-success': 'btn-warning' } btn col-12 d-block mx-auto`} 
          onClick={()=>changeVsMode()}>
          {vs.vsMode} Mode
        </button>
        <br/>
        {vs.vsMode === 'Human' && userInfo.email === currentUser.user.email ? 
          <h6 type="button" data-bs-toggle="modal" data-bs-target="#opponentModal">
            Invite Opponents
          </h6>
        : ''}
        <Modal />
      </div>
    </div>
  )
}
export default Human;