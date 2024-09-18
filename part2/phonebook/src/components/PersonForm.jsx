  const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }
        
        const resultado = persons.find((person) => person.name === newName);
        let thereIs = resultado ? true : false;
        if (thereIs) {
          let message = `${newName} is already added to phonebook`
          alert(message);
    
        }else{
          setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
      }
    
    
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        console.log(event.target.value)
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