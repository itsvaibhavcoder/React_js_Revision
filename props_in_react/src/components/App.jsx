import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";

function CreateCard(contact){
  return(
    <Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img =""/>
     {contacts.map(CreateCard)}
    </div>
  );
}

export default App;