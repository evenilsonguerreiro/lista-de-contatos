import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeContact } from '../store/contactsSlice';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  margin-left: 3px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditingContact(id);
  };

  const handleDelete = (id: number) => {
    dispatch(removeContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <div>
            <Button onClick={() => handleEdit(contact.id)}>Editar</Button>
            <Button onClick={() => handleDelete(contact.id)}>Remover</Button>
          </div>
          {editingContact === contact.id && (
            <ContactForm
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              onSubmit={() => setEditingContact(null)}
            />
          )}
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;

