import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFNewFilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://192.168.1.220:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter}  setFNewFilter={setFNewFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons}  setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}  />
      <h3>Numbers</h3>
      <Persons persons={persons}  newFilter={newFilter}/>
    </div>
  )
}

export default App
