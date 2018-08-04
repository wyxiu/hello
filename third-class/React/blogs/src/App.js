import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import AboutUs from './pages/AboutUs';
//import Frame from './components/nav/Frame';
//import Logo from './components/logo/Logo';



class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
          <Redirect exact to="/home" from=""></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/blog" component={Blog}></Route>  
          <Route path="/blog/detail/:id" component={Detail}></Route>       
        </Switch>
      </Router> 
     
    );
  }
}

export default App;
