import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {
          people.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))
        }
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Jon'},
          {name: 'Christina'},
          {name: 'Cadence'}
        ]}/>
        <ContactList contacts={[
          {name: 'Ruben'},
          {name: 'Joanne'},
          {name: 'Chloe'}
        ]}/>
      </div>
    );
  }
}

export default App;
