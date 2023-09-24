import css from './App.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contacnform/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { name } = this.state;

    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact], 
      name: '',
    }))
  };

  render() {
    return (
      <div className={css.container}>
        <ContactForm
          contacts={this.props.contacts}
          name={this.props.name}
          onInputChange={this.onInputChange}
          handleAddContact={this.handleAddContact}
        />
      </div>
    );
  }
}
