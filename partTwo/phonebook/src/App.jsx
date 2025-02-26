import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault();
    let isRepeat = persons.find(person => person.name === newName)
    console.log(isRepeat)
    isRepeat ? alert("This name has already been saved. If you need to repeat a name, change it slightly to submit.") : setPersons(persons.concat({name: newName}))
    console.log(newName)
    console.log(persons)
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit" onClick={handleButton}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div></div>
    </div>
  )
}

export default App