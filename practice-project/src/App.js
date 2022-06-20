import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ContactList from './components/ContactLIst';
import AddContact from './components/AddContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact); 
    setContacts([...contacts,{id: {uuid}, ...contact}]);
  }
    
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
     setContacts(newContactList) 

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
    <BrowserRouter>
    <Routes>
      {/* <Header/> */}
      <Route path="/add" element={<AddContact />} />
      <Route path="/" element={<ContactList />} />
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId ={removeContactHandler}/> */}
    </Routes>
    </BrowserRouter>
    
     
  </div>
  );
}

export default App;
