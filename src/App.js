import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Section from './components/Section';

import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as phonebookSelectors from './redux/phonebook-selectors';
import * as phonebookOperations from './redux/phonebook-operations';


class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
  
render() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        
        <ContactList />
        
      </Section>
    </div>
  );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);;



