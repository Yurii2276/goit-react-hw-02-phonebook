import css from './App.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contacnform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and telephone number!');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact], 
      name: ``,
      number: ``,
    }))
  };

  filterByName = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>

        <ContactForm
          contacts={this.state.contacts}
          name={this.state.name}
          number={this.state.number}
          onInputChange={this.onInputChange}
          handleAddContact={this.handleAddContact}
        />  

        <h2 className={css.title}>Contacts</h2>

        <Filter filter={this.state.filter} filterByName={this.filterByName}/>

        <ContactList contacts={filteredContacts}/>


      </div>
    );
  }
}
