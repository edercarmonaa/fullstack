import personService from '../services/persons'
  const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setMessage, setError}) => {
    
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
              setMessage(
                `Update '${person.name}' `
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
            .catch(error => {
              setPersons(persons.filter(p => p.id !== resultado.id))
              setError(
                `Information of '${person.name}' was already deleted from server`
              )
              setTimeout(() => {
                setError(null)
              }, 5000)
            })
            setNewName('')
            setNewNumber('')
        }
        }else{
          personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
          })
          setNewName('')
        setNewNumber('')
        setMessage(
          `Added '${personObject.name}' `
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        }
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