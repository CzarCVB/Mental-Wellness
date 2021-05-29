import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Pages
import SignIn_SignUp from './pages/signIn-signUp/SignIn_SignUp'
import BlogPage from './pages/BlogPage/Blog' 

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/blog/:section' component={BlogPage} />
          <Route exact path='/login' component={SignIn_SignUp} />
          <Route exact path='/register' component={SignIn_SignUp} />
      </Switch>
    </div>
  );
}

export default App;
