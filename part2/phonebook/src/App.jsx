import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notification">
      {message}
    </div>
  )
}

const MessageError = ({ error }) => {
  if (error === null) {
    return null
  }
  return (
    <div className="error">
      {error}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      < MessageError error={error} />
      <Filter newFilter={newFilter}  setFNewFilter={setFNewFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons}  setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}  setMessage={setMessage} setError={setError} />
      <h3>Numbers</h3>
      <Persons persons={persons}  newFilter={newFilter} setPersons={setPersons} />
    </div>
  )
}

export default App
