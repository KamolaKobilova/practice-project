import React from "react";

const ContactLIst = (props) => {
    console.log(props );

    const renderContactList = props.contact.map((contact) => {
        return(
            <div className="item ">
               <div className="content">
                  <div className="header">{contact.name}</div>
                  <div>{contact.email}</div>
               </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
    })

  return(
      <div className="ui celled list ">
       {renderContactList}
      </div>
  )
}

export default ContactLIst