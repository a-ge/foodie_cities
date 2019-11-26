import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';

import { Provider } from 'react-redux';
import store from './store';

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Navbar/>
          <Container>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/register' component={Register}/>
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
