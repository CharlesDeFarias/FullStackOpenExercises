import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook.jsx'
import { getAll, createPerson, updatePerson, deletePerson } from './services/persons.js'
import './index.css'
import Notification from './components/error.jsx'

const App = () => {
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [persons, setPersons] = useState([ ])   
  const [message, setMessage] = useState("")
  const [status, setStatus ] = useState(null)   

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
              setMessage(`${newName} updated succesfully.`)
              setStatus(200)
              setNewName('');
              setNewNumber('');
            })
            .catch(error => {
              setMessage(`Error updating person. Error: ${error}`)
              setStatus(400)
              setTimeout(() => {
                setMessage("")
                setStatus(null)
              }, 5000)
            });
        }
      } else {
        const newAdd = { name: newName, number: newNumber };
        
        createPerson(newAdd)
          .then(response => {
            setPersons(prev => [...prev, response]);
            setMessage(`${newName} added succesfully.`)
            setStatus(200)
            setNewName('');
            setNewNumber('');
            setTimeout(() => {
              setMessage("")
              setStatus(null)
            }, 5000)
          })
          .catch(error => {
            setMessage(`Error adding person.`)
            setStatus(400)
            setTimeout(() => {
              setMessage("")
              setStatus(null)
            }, 5000)
          })
      }
  };
}

    const handleDelete = (e) => {
      const ID = e.target.name
      const message = "Are you sure you want to delete this contact?"
      if(window.confirm(message)){
        deletePerson(ID)
        .catch(error => {
          setMessage(`Error adding person.`)
          setStatus(400)
          setTimeout(() => {
            setMessage("")
            setStatus(null)
          }, 5000)
        })
        setPersons(prev => prev.filter(person => person.id !== ID));
      }
    }

  return (
    <div>
      <Notification msg={message} status={status} />
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