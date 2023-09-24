import React, { Component } from 'react';

import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    const { name, onInputChange, handleAddContact } = this.props;

    return (
      <div>
        <h2 className={css.titlePfonebook}>Phonebook</h2>
        <label htmlFor="" className={css.InputContainer}>
          <span className={css.inputtitle}>Name</span>
          <input
            onChange={onInputChange}
            name="name"
            value={name}
            className={css.inputFormStyle}
            type="text"
            required
          />
        </label>
        <button onClick={handleAddContact} className={css.btnAddContact} type="button">
          Add contact
        </button>

        <h2 className={css.titlePfonebook}>Contacts</h2>

        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
