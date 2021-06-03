import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import availablePlayers from '../../redux/action/availableUsers';
import Image from '../../../assets/images/cm.png';


const Modal = () => {
  const dispatch = useDispatch();
  const {availableUsers} = useSelector(state => state.availableUsers);
  const {user} = useSelector(state => state.user);
 
  const handleInvite = (user) => dispatch({type: "INVITE_OPPONENT", user});

  useEffect(() => {
    dispatch(availablePlayers(user.token));
  }, []);

  return (
    <div className="modal fade" id="opponentModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Available users for games</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {availableUsers && availableUsers.map((user,index) =>
          <div className="modal-body d-flex justify-content-around align-items-center" key={index}>
            <img src= {Image} alt="tradelink_image"/>
            <h3 className="small-text">{user.username} <br/> {user.email} </h3>
            <button className="btn btn-success" onClick={()=> handleInvite(user)}>Invite Player</button>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Modal;
