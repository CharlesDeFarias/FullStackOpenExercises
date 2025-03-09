const ContactList = ({ persons, handleDelete }) => {
    console.log(persons)
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map(person => (
            <li key={person.name}>
            {person.name}, {person.number}
            <button onClick={handleDelete} name={person.id}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default ContactList