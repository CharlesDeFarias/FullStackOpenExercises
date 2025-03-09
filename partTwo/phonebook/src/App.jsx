import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook.jsx'
import { getAll, createPerson, updatePerson, deletePerson } from './services/persons.js'

const App = () => {
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [persons, setPersons] = useState([ ])   

  useEffect(() => {
    getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])

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
      let existingPerson = persons.find(person => person.name === newName);
      
      if (existingPerson) {
        if (window.confirm("This name already exists. Click OK to update the number.")) {
          const updatedPerson = { ...existingPerson, number: newNumber };
  
          updatePerson(existingPerson.id, updatedPerson)
            .then(response => {
              setPersons(persons.map(person => 
                person.id === existingPerson.id ? response : person
              ));
              setNewName('');
              setNewNumber('');
            })
            .catch(error => {
              console.error("Error updating person:", error);
            });
        }
      } else {
        const newAdd = { name: newName, number: newNumber };
  
        createPerson(newAdd)
          .then(response => {
            setPersons(prev => [...prev, response]);
            setNewName('');
            setNewNumber('');
          })
          .catch(error => console.error("Error adding contact:", error));
      }
    }
  };

    const handleDelete = (e) => {
      const ID = e.target.name
      const message = "Are you sure you want to delete this contact?"
      if(window.confirm(message)){
        deletePerson(ID)
        setPersons(prev => prev.filter(person => person.id !== ID));
      }
  }

  return (
    <div>
      <Phonebook 
      persons={persons} 
      handler={handleEvents} 
      newName={newName} 
      newNumber={newNumber} 
      newFilter={newFilter}
      handleDelete={handleDelete} />
    </div>
  )
}

export default App