import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import styled from 'styled-components';

interface ContactFormProps {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  onSubmit: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm: React.FC<ContactFormProps> = ({ id, name = '', email = '', phone = '', onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactEmail, setContactEmail] = useState(email);
  const [contactPhone, setContactPhone] = useState(phone);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const contact = { id: id || Date.now(), name: contactName, email: contactEmail, phone: contactPhone };
    if (id) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact(contact));
    }
    onSubmit();
  };

  useEffect(() => {
    setContactName(name);
    setContactEmail(email);
    setContactPhone(phone);
  }, [name, email, phone]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Phone"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        required
      />
      <Button type="submit">{id ? 'Edit' : 'Add'} Contato</Button>
    </Form>
  );
};

export default ContactForm;
