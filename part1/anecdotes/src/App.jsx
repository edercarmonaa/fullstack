import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdotes = (props) => {
  if (props.type === 0 ) {
    return (
      <div>
        <p>{props.anecdote}</p>
        <p>has {props.votes} votes</p>
      </div>
    )
  }else{
    if(props.masvote !== undefined ) {
      return (
        <div>
          <p>{props.anecdote}</p>
          <p>has {props.votes} votes</p>
        </div>
      )
    }
  }

  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0))
  const [masvote, setMasVote] = useState()

  const handleNextAnecdote = () => {
    const changue = Math.floor(Math.random() * 8)
    setSelected(changue)
    console.log(points)
    maxValueFind()
  }

  const maxValueFind = () =>{
    console.log(masvote)
    const maxvalue = Math.max(...points)
    const maxList = []
    if(maxvalue !== 0){
      points.forEach((el, index) => {
        if ( el === maxvalue ) maxList.push(index);
      });
      setMasVote(maxList[0])
    }
  }

  const handleVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    maxValueFind()
  }

  return (
    <div>
      <Title text="Anecdote of the day"/>
      <Anecdotes masvote={masvote} type={0} anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleNextAnecdote} text='next anecodte' />
      <Title text="Anecdote with most votes"/>
      <Anecdotes masvote={masvote} type={1} anecdote={anecdotes[masvote]} votes={points[masvote]} />
    </div>
  )
}

export default App