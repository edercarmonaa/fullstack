import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, newFilter, setPersons }) => {
  const personsToShow = newFilter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  const deletePersonOf = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(` Delete '${person.name}' ?`)) {
      personService
      .del(id)
      .then(returnedPerson => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(
          `the note '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(p => p.id !== id))
      }) 
    } 
  }

    return (
        <ul>
        {personsToShow.map(person => 
            <Person 
              key={person.id} 
              person={person} 
              deletePerson={() => deletePersonOf(person.id)}
            />
          )}
        </ul>
    )
  }
  
  export default Persons