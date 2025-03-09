import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook.jsx'
import { getAll, createPerson } from './services/persons.js'

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
      let isRepeat = persons.some(person => person.name === newName);

      if (isRepeat) {
        alert("This name has already been saved. If you need to repeat a name, change it slightly to submit.");
      } else {
        const newAdd = { name: newName, number: newNumber }
        createPerson(newAdd)
        .then(response => {
          console.log(response)
        })
        setNewName('');
        setNewNumber('');
      }
    }
  };

  
  return (
    <div>
      <Phonebook 
      persons={persons} 
      handler={handleEvents} 
      newName={newName} 
      newNumber={newNumber} 
      newFilter={newFilter} />
    </div>
  )
}

export default App