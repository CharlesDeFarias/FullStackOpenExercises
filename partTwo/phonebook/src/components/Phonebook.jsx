import Header from './Header.jsx';
import ContactList from './ContactList.jsx';

const Phonebook = ({
    persons, 
    handler, 
    newName, 
    newNumber, 
    newFilter,
    handleDelete
}) => {
    console.log(persons)

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(newFilter) || person.number.toLowerCase().includes(newFilter)
    );

  return (
    <div>
      <Header handler={handler} filter={newFilter} newName={newName} newNumber={newNumber} />
      <ContactList persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default Phonebook;
