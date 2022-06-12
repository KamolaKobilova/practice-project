import React from 'react';
import Header from './components/Header';
import ContactList from './components/ContactLIst';
import AddContact from './components/AddContact';

function App() {
 
  const contact = [
    {
      id: "1",
      "name": "Kamola",
      "email": "kamola_8880@mail.ru",
    },
    {
      id: "2",
      "name": "Sohiba",
      "email": "sohiba_10@mail.ru",
    }
  ]


  return (
  <div className='ui container'>
    <Header/>
    <AddContact/>
    <ContactList contact={contact}/> 
  </div>
  );
}

export default App;
