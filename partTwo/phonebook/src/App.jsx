import { useState } from 'react'
import Phonebook from './components/Phonebook.jsx'

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
  
  return (
    <div>
      <Phonebook persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App