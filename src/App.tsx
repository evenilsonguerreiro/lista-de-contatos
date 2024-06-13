
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EstiloGlobal, { Container } from './styles/GlobalStyles';

const App: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <EstiloGlobal />
      <Container>
        <h1>Lista de contatos</h1>
        {isAdding ? (
          <ContactForm onSubmit={() => setIsAdding(false)} />
        ) : (
          <button onClick={() => setIsAdding(true)}>Add Novo contato</button>
        )}
        <ContactList />
      </Container>
    </>
  );
};

export default App;

