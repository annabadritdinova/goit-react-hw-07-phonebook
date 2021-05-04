import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/phonebook-selectors';
import * as phonebookOperations from '../../redux/phonebook-operations';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  contactValidation = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter contact information');
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.contactValidation()) {
      return;
    }

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.formItem}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Сontact name"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.formItem}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Сontact number"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
     dispatch(phonebookOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);