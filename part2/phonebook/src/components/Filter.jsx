

const Filter = ({ newFilter, setFNewFilter }) => {
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFNewFilter(event.target.value)
    }

    return (
        <div>
            filter shown with: <input value={newFilter} 
            onChange={handleFilterChange}/>
        </div>
    )
  }
  
  export default Filter