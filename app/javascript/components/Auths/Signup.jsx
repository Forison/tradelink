import React, { useRef, useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import authHandler from '../../redux/action/handleAuth';

const Signup = () => {
  const email = useRef('');
  const username = useRef('');
  const [message, setMessage] = useState('');
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData = {user: {email: email.current.value, username: username.current.value}};
    const response = await dispatch(authHandler(userData, '/users'));
    
    if(response.isLogin){
      localStorage.setItem('/_t_', response.token);
      setMessage('account was created successfully');
      setTimeout(() => {
        history.push("/game");
      }, 3000);
    } else{
      setMessage('Something went wrong, make sure the account does not exist');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }

  return (
    <div className="container text-light">
      <div className="col-12 col-md-5 mx-auto shadow-sm p-5 mt-3 rounded">
        <h6>Signup to play </h6>
        <small className= {message ? 'visible alert alert-info' : 'invisible'} role="alert">{message ? message : ''}</small>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" ref={email}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input type="text" className="form-control" placeholder="John" ref={username}/>
          </div>
          <br />
          <button type="submit" className="btn btn-secondary">
            Create Player
          </button>
          <br/>
          <small className="small-text">already a member ? <Link to={'/log_in'}>log in</Link>.</small>
        </form>
      </div>
    </div>
  )
}
export default Signup;