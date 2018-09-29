import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: []
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id) // this will be merged the state
    }))

    // this.setState({
      
    // })
  }

  render() {
    return (
      <div> 
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} /> 
      </div>
    )
  }
}

export default App;