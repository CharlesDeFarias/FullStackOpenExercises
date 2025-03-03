import { useState } from 'react';
import Header from './Header.jsx';

const ContactList = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}, {person.phone}</li>
        ))}
      </ul>
    </div>
  );
};

const Phonebook = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleEvents = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setNewName(value);
    } else if (name === "number") {
      setNewNumber(value);
    } else if (name === "filter") {
      setNewFilter(value.toLowerCase());
    } else if (e.type === "submit") {
      e.preventDefault();
      let isRepeat = persons.some(person => person.name === newName);

      if (isRepeat) {
        alert("This name has already been saved. If you need to repeat a name, change it slightly to submit.");
      } else {
        setPersons([...persons, { name: newName, phone: newNumber }]);
        setNewName('');
        setNewNumber('');
      }
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter) || person.phone.includes(newFilter)
  );

  return (
    <div>
      <Header handler={handleEvents} filter={newFilter} newName={newName} newNumber={newNumber} />
      <ContactList persons={filteredPersons} />
    </div>
  );
};

export default Phonebook;
