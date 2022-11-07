import PropTypes from "prop-types";
import { useRef } from "react";
import { Contact } from "../../models/contact.class";

const ContactForm = ({ add }) => {
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const emailRef = useRef("");

  const addContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      firstnameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact)
  };
  return (
    <form onSubmit={addContact}>
      <input ref={firstnameRef} type="text" placeholder="Firstname" required />
      <input ref={lastnameRef} type="text" placeholder="Lastname" required />
      <input ref={emailRef} type="email" placeholder="Email" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
