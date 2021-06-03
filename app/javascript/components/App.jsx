import React from 'react';
import Game from '../components/Game/Index';
import Login from './Auths/Login';
import Signup from './Auths/Signup';
import { useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';


const App = () => {
  const currentUser = useSelector(state=>state.user);
  return (
    <>      
      <BrowserRouter>
        <Switch>
          <Route
            path="/log_in"
            exact
            strict
            component={Login}
          />

          <Route
            path="/sign_up"
            exact
            strict
            component={Signup}
          />

          <Route
            path={"/game"}
            exact
            strict
            render={(props) => {
              if (currentUser.user.isLogin) {
                return (<Game {...props} />);
              }
              return (<Redirect to="/log_in" />);
            }}
          />

          <Route
            path={"/"}
            exact
            strict
            render={(props) => {
              if (currentUser.user.isLogin) {
                return (<Game {...props} />);
              }
              return (<Redirect to="/log_in" />);
            }}
          />

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
