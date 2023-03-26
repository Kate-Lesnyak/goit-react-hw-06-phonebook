import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Section } from './Section';
import { Layout } from './Layout';
import { Notification } from './Notification';

import { useLocalStorage } from '../hooks/';

const LS_KEY = 'contacts';

// const getContacts = () => {
//   const savedAndParsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
//   if (savedAndParsedContacts !== null) {
//     return savedAndParsedContacts;
//   }
//   return [];
// };

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, []);

  // const [contacts, setContacts] = useState(getContacts);

  // useEffect(() => {
  //   window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return Notify.info(`${name} is already in contacts!`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.target.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Section>
      <Layout>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          <Notification message="There are no contacts in your phonebook. Please add a contact!" />
        )}
      </Layout>
    </Section>
  );
};
