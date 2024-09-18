import Person from './Person'

const Persons = ({ persons, newFilter }) => {
  const personsToShow = newFilter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (
        <ul>
        {personsToShow.map(person => 
            <Person key={person.name} person={person} />
          )}
        </ul>
    )
  }
  
  export default Persons