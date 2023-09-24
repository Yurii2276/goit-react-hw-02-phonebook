import React, { Component } from 'react';

import css from './Contactlist.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className={css.contactList}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
