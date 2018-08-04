import React, { Component,Fragment} from 'react';
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
// import Frame from './components/nav/Frame';
// import Logo from './components/logo/Logo';
 

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
<<<<<<< HEAD
          {/* <Logo/>
          <Frame/> */}
=======
          <Logo vertical={this.props.verticallogo}/>
          <Frame/>
>>>>>>> 48d3c6280eebca3b42246d05dfff8a792e89bae4
         <Switch>
          <Redirect exact to="/home" from=""></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/blog" component={Blog}></Route>  
          <Route path="/blog/detail/:id" component={Detail}></Route>       
        </Switch>
        </Fragment> 
      </Router> 
     
    );
  }
}

export default App;
