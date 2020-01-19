import React, { Component } from 'react'
import './App.css';
// import { Button } from 'react-bootstrap';
import autoBind from 'react-autobind';
// import shortid from 'shortid'
import LandPage from './LandPage'
import Navigation from './Nav'
import LanPageNav from './LanPageNav'

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
      <LanPageNav/>
      <LandPage/>
      </div>
    )
  }
}




// <Navigation/>
// <Home/>

