import React, { Component } from 'react';
import Header from './Header'
import Form from './Form';
import Card from './Card';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      catName: '',
      submittedCatName: 'my first cat'
    }
  }

  handleChange = (event) => this.setState({'catName': event.target.value});

  submissionElement = () => document.querySelector('#catRequestFormInput');
  
  handleError = () => alert('Enter a valid name');

  submissionIsValid = (submission) => {
    if(submission === '' ||
    typeof submission !== "string") {
      this.handleError()
      return false;
    } else {
      return true
    }
  }

  onKeyDownSubmit = (event) => {
    if(event.code === 'Enter') {
      this.handleSubmit(event);
    } else {    
      return;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.submissionIsValid(this.state.catName)) {
      this.setState({'submittedCatName': this.state.catName}, () => {
        this.submissionElement().value = '';
        this.setState({'catName': ''});
      });
    } else {
      return;
    }
    
  }

  render() {
    return (
      <>
          <Header/>
          <Form 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            onKeyDownSubmit={this.onKeyDownSubmit}
          />
          <Card name={this.state.submittedCatName}/>
      </>
    )
  }
}

export default App
