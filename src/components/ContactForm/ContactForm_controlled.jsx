// import { useState, useEffect } from 'react';

// import { useState } from 'react';

// import {
//   StyledForm,
//   StyledFormField,
//   StyledLabel,
//   StyledInput,
//   StyledButton,
// } from './ContactForm.styled';

// export const ContactForm = ({onSubmit}) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return null;
//     }
//   };

// const handleSubmit = e => {
//  e.preventDefault();
//  onSubmit(name, number);
//  reset();
// };

// const reset = () => {
//   setName('');
//   setNumber('');
// }

//   return (
//     <StyledForm onSubmit={handleSubmit}>
//       <StyledFormField>
//         <StyledLabel>Name</StyledLabel>
//         <StyledInput
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </StyledFormField>

//       <StyledFormField>
//         <StyledLabel>Number</StyledLabel>
//         <StyledInput
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </StyledFormField>
//       <StyledButton type="submit">Add contacts</StyledButton>
//     </StyledForm>
//   );
// };
