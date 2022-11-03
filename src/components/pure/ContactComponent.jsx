import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Fist Name: {contact.firstname}</h2>
      <h3>Last Name: {contact.lastname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>Status: {contact.connected ? "CONNECTED" : "DISCONNECTED"}</h5>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
