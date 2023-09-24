import React, { Component } from 'react';

import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    const { name, number, onInputChange, handleAddContact } = this.props;

    return (
      <form className={css.contactContainer} onSubmit={handleAddContact}>
       
        <label htmlFor="" className={css.InputContainer}>
          <span className={css.inputtitle}>Name</span>
          <input
            onChange={onInputChange}
            name='name'
            value={name}
            className={css.inputFormStyle}
            type='text'
            required
          />
        </label>

        <label htmlFor="" className={css.InputContainer}>
          <span className={css.inputtitle}>Number</span>
          <input
            onChange={onInputChange}
            name='number'
            value={number}
            className={css.inputFormStyle}
            type='tel'
            required
          />
        </label>

        <button
          className={css.btnAddContact}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}
