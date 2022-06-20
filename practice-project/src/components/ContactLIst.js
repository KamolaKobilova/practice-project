import React from "react";
import ContactCard from "./ContactCard";
import Header from "./Header";

const ContactLIst = (props) => {
    console.log(props );
    
    const deleteContactHandler = (id) => {
      props.getContactId (id)
    }; 
      const contacts = [
        {
        id: "1",
        "name": "Kamola",
        "email": "kamola_8880@mail.ru"
      }
    ]

    const renderContactList = contacts.map((contact) => {
        return(
          <Header/>,
          <ContactCard contacts={contact}
           clickHandler={deleteContactHandler} 
           key={contact.id}
          />
        )
    })

  return(
      <div className="ui celled list ">
       {renderContactList}
      </div>
  )
}

export default ContactLIst