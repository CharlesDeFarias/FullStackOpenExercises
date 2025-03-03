import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: "555-555-5555"
    },{ 
      name: 'Jon Jameson',
      phone: "555-555-5556"
    },
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setNewFilter(e.target.value.toLowerCase())
  }

  const handleButton = (e) => {
    e.preventDefault();
    let isRepeat = persons.find(person => person.name === newName)
  
    isRepeat ? alert("This name has already been saved. If you need to repeat a name, change it slightly to submit.") : setPersons(persons.concat({name: newName, phone: newNumber}))
  }
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter) || person.phone.includes(newFilter)
  );

  console.log(newFilter)
  return (
    <div>
      <h2>Phonebook</h2>
      <span>Filter shown with</span>
      <input value={newFilter} onChange={handleFilter} />

      <form>
        <div>
          name: <input value={newName} onChange={handleName} />
          Number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleButton}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => (
          <li key={person.name}>{person.name}, {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App