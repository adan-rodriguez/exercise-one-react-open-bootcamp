import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact, remove, status }) => {
  return (
    <div>
      <h2>Fist Name: {contact.firstname}</h2>
      <h3>Last Name: {contact.lastname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>Status: {contact.connected ? "CONNECTED" : "DISCONNECTED"}</h5>
      <button onClick={() => status(contact)}>Change Status</button>
      <button onClick={() => remove(contact)}>Delete Contact</button>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  remove: PropTypes.func.isRequired,
  status: PropTypes.func.isRequired,
};

export default ContactComponent;
