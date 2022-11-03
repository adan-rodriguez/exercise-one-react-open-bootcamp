import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

const ContactList = () => {
  const defaultContact = new Contact(
    "Adan",
    "Rodriguez",
    "adan.rodriguez.fusta@gmail.com",
    false
  );

  return (
    <div>
      <h1>ContactList:</h1>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default ContactList;
