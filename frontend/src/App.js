import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Pages
import SignIn_SignUp from './pages/signIn-signUp/SignIn_SignUp'
import BlogPage from './pages/BlogPage/Blog' 
import Homepage from './pages/Homepage/Homepage'

//component
import Footer from './component/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/blog/:section' component={BlogPage} />
          <Route exact path='/login' component={SignIn_SignUp} />
          <Route exact path='/register' component={SignIn_SignUp} />
          <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
