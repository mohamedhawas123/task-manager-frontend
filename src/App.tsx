import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from '@mui/material';
import HomePage from './screens/home'
import LoginScreen from './screens/login'

function App() {


  return (
    <React.Fragment>
    <Router>
  <Container>
  <Route exact  path="/" component={HomePage} />
  <Route exact  path="/login" component={LoginScreen} />
  


  </Container>
    </Router>
  </React.Fragment>
  );
}

export default App;
