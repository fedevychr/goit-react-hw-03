import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <div>
        <p>
          <FaUser /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <div>
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
