import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import ContactList from './components/ContactLIst';
import AddContact from './components/AddContact';

function App() {
   const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact])
  }
    
  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (retreiveContacts) setContacts(retreiveContacts);
  },[]);

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts]);


  return (
  <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/> 
  </div>
  );
}

export default App;
