import personService from '../services/persons'
  const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    
    const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
      }
      const resultado = persons.find((person) => person.name === newName);
      let thereIs = resultado ? true : false;
        if (thereIs) {
          if (window.confirm(`'${resultado.name}' is already added phonebook, replace the old number with new number?`)) {
            const person = persons.find(p => p.id === resultado.id)
            const changedPerson = { ...person, number: newNumber }
            personService
            .update(resultado.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== resultado.id ? person : returnedPerson))
            })
            .catch(error => {
              console.log(error)
              alert(
                `the note '${person.name}' was already deleted from server`
              )
              setPersons(persons.filter(p => p.id !== resultado.id))
            })
        }
        }else{
          personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
          })
        }
        setNewName('')
        setNewNumber('')
    }  
    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
        onChange={handleNameChange}/>
        </div>
        <div>
        number: <input value={newNumber} 
        onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm