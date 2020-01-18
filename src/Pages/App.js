import React, { Component } from 'react'
import './App.css';
// import { Button } from 'react-bootstrap';
import autoBind from 'react-autobind';
// import shortid from 'shortid'
import Home from './Home'
import Navigation from './Nav'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    autoBind(this);
  }
  render() {
    return (
      <div>
      <Navigation/>
       <Home/>
      </div>
    )
  }
}


