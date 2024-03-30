const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <div>
        <p>🙎‍♂️ {contact.name}</p>
        <p>📞 {contact.number}</p>
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
