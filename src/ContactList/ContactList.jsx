import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return <Contact contact={contact} key={contact.id} />;
        })}
    </ul>
  );
};

export default ContactList;
