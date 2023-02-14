import React, { Component } from 'react';
import Header from './Header'
import Form from './Form';
import Card from './Card';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      catName: 'my first cat'
    }
  }

  submissionElement = () => document.querySelector('#catRequestFormInput');

  setCatName = () => {
    if(this.submissionElement().value !== '') {
      this.setState({'catName': this.submissionElement().value}, () => {
        this.submissionElement().value = '';
      });
    } else {
      return
    }
  }

  onKeyDownSubmit = (event) => {
    if(event.code === 'Enter') {
      event.preventDefault();
      this.setCatName();
    } else {
      return;
    }
  }

  onClickSubmit = () => {
    this.setCatName();
  }

  render() {
    return (
      <>
          <Header/>
          <Form 
            onClickSubmit={this.onClickSubmit} 
            onKeyDownSubmit={this.onKeyDownSubmit}
          />
          <Card name={this.state.catName}/>
      </>
    )
  }
}

export default App
