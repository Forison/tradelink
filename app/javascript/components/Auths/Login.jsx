import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory  } from 'react-router-dom';
import authHandler from '../../redux/action/handleAuth';

const Login = () => {
  const email = useRef('');
  const [message, setMessage] = useState('');
  let history = useHistory();
  const dispatch = useDispatch();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData = {user: {email: email.current.value}};
    const response= await dispatch(authHandler(userData, '/users/login'));
   
    if(response.isLogin){
      localStorage.setItem('/_t_', response.token);
      history.push("/game");
    }else{
      setMessage('Something went wrong, try later');
      setTimeout(() => {
        setMessage('')
      }, 3000);
    }
  }
  

  return (
    <div className="container">
      <div className="col-12 col-md-5 mx-auto shadow-sm p-5 mt-3 rounded">
        <h6 className="text-dark">Log in to play game</h6>
        <small className= {message ? 'visible alert alert-info' : 'invisible'} role="alert">{message ? message : ''}</small>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" ref={email} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <br />
          <button type="submit" className="btn btn-secondary">
            Login to play
          </button>
          <br />
          <small className="small-text">Don't have an account? <Link to={'/sign_up'}>Sign up</Link>.</small>
        </form>
      </div>
    </div>
  )
}
export default Login;