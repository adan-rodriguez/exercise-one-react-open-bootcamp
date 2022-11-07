import { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";
import ContactForm from "../pure/ContactForm";

const ContactList = () => {
  const defaultContact1 = new Contact(
    "Adan",
    "Rodriguez",
    "adan.rodriguez.fusta@gmail.com",
    false
  );

  const defaultContact2 = new Contact(
    "Juan",
    "Pérez",
    "juan.perez@gmail.com",
    true
  );

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

  const addContact = (newContact) => {
    const tempContacts = [...contacts];
    tempContacts.push(newContact);
    setContacts(tempContacts);
  };

  const removeContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  };

  const changeStatusContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  };

  return (
    <div>
      <h1>ContactList:</h1>
      {contacts.map((contact, index) => (
        <ContactComponent
          key={index}
          contact={contact}
          remove={removeContact}
          status={changeStatusContact}
        />
      ))}
      <ContactForm add={addContact} />
    </div>
  );
};

export default ContactList;
