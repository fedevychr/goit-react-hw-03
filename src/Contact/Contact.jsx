const Contact = ({ contact }) => {
  return (
    <li>
      <div>
        <p>🙎‍♂️ {contact.name}</p>
        <p>📞 {contact.number}</p>
      </div>
      <div>
        <button type="button">Delete</button>
      </div>
    </li>
  );
};

export default Contact;
