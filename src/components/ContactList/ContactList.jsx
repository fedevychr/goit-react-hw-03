import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              onDeleteContact={onDeleteContact}
              key={contact.id}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
