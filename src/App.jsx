import React, { Component } from 'react';
import Header from './Header'
import Form from './Form';
import Card from './Card';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      roboName : 'my first cat'
    }
  }

  getRoboNameInput = () => {
    const submission = document.querySelector('#roboRequestFormInput').value;
    return submission;            
}

setRoboName = () => {
    this.setState({'roboName': this.getRoboNameInput()})   
}

onNameSubmit = (event) => {
    this.setRoboName();
}

  render() {
    return (
      <>
          <Header/>
          <Form onNameSubmit={this.onNameSubmit}/>
          <Card name={this.state.roboName}/>
      </>
    )
  }
}

export default App
