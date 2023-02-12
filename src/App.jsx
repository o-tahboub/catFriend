import React, { Component } from 'react';
import Header from './Header'
import Form from './Form';
import Card from './Card';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      catName : 'my first cat'
    }
  }

  getCatNameInput = () => {
    const submission = document.querySelector('#catRequestFormInput').value;
    return submission;            
}

setCatName = () => {
    this.setState({'catName': this.getCatNameInput()})   
}

onNameSubmit = (event) => {
    this.setCatName();
}

  render() {
    return (
      <>
          <Header/>
          <Form onNameSubmit={this.onNameSubmit}/>
          <Card name={this.state.catName}/>
      </>
    )
  }
}

export default App
