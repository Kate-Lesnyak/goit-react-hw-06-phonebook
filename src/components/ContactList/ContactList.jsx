import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { getContacts, getFilter } from 'redux/selectors';

import { ContactListItem } from './ContactListItem';
import { StyledContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedName = name.toLowerCase();
  if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
    return Notify.info(`${name} is already in contacts!`);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <StyledContacts>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          // onDeleteContact={onDeleteContact}
        />
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};
