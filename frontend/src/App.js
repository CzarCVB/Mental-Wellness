import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Pages
import SignIn_SignUp from './pages/signIn-signUp/SignIn_SignUp'
import BlogPage from './pages/BlogPage/Blog' 
import Homepage from './pages/Homepage/Homepage'

//component
import Footer from './component/Footer/Footer'
import Header from "./components/header/header.component";
import Store from "./components/store/store.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path='/blog/:section' component={BlogPage} />
          <Route exact path='/login' component={SignIn_SignUp} />
          <Route exact path='/register' component={SignIn_SignUp} />
          <Route exact path='/' component={Homepage} />
          <Route exact path="/shop" component={Store} />
          <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
