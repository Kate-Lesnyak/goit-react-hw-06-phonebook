// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';

import { getContacts, getFilter } from 'redux/selectors';

import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm';
// import { ContactForm } from './ContactForm/ContactForm_controlled';

import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Section } from './Section';
import { Layout } from './Layout';
import { Notification } from './Notification';

// import { useLocalStorage } from '../hooks/';

// const LS_KEY = 'contacts';

// const getContacts = () => {
//   const savedAndParsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
//   if (savedAndParsedContacts !== null) {
//     return savedAndParsedContacts;
//   }
//   return [];
// };

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage(LS_KEY, []);

  // // const [contacts, setContacts] = useState(getContacts);

  // // useEffect(() => {
  // //   window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // // }, [contacts]);

  // const [filter, setFilter] = useState('');

  // todo redux
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // todo redux end

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const normalizedName = name.toLowerCase();
  //   if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
  //     return Notify.info(`${name} is already in contacts!`);
  //   }

  //   setContacts(prevState => [...prevState, contact]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const changeFilter = e => setFilter(e.target.value);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <Section>
      <Layout>
        <GlobalStyle />
        <h1>Phone book</h1>
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
