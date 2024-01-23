import { useState } from 'react'

const History = (props) => {
  if (props.all == 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

  return (
    <div>
     <Statistics good={props.good}  neutral={props.neutral}  bad={props.bad}  all={props.all}  positive={props.positive} average={props.average}/>
    </div>
  )
}

const Title = ()=> {
  return(
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

const SubTitle = ()=> {
  return(
    <div>
      <h1>Statistics</h1>
    </div>
  )
}

const Statistics = (props)=> {
  return(
    <table>
      <tbody>
      <Staticline text="good" value={props.good}/>
      <Staticline text="neutral" value={props.neutral}/>
      <Staticline text="bad" value={props.bad}/>
      <Staticline text="all" value={props.all}/>
      <Staticline text="average" value={props.average}/>
      <Staticline text="positive" value={props.positive}/>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Staticline = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleStatistics= (all, good, bad) =>{
    setPositive((good / all)*100)
    setAverage((good - bad )/ all)
  }

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    const updateAll = all + 1
    handleStatistics(updateAll, updatedGood, bad)
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(updatedNeutral + good + bad)
    const updateAll = all + 1
    handleStatistics(updateAll, good, bad)
  }
  
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(updatedBad + neutral + good)
    const updateAll = all + 1
    handleStatistics(updateAll, good, updatedBad)
  }

  return (
    <div>
      <Title />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <SubTitle />
      <History  good={good}  neutral={neutral}  bad={bad}  all={all}  positive={positive} average={average}/>
    </div>
  )
}

export default App
