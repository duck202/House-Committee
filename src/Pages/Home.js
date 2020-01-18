import React, { Component } from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
import autoBind from 'react-autobind';
import shortid from 'shortid'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    autoBind(this);
  }
  render() {
    return (
      <div>
        Hello world!
      </div>
    )
  }
}


