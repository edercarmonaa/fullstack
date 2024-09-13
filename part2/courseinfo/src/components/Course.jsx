
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const initialValue = 0;
  /*const total = 
  parts.reduce((s, p) => s.exercises + p.exercises,
  0,)*/

  const total = parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s;
  })
  /*const initialValue = 0;
    const copyItems = [];
    parts.forEach((item) => {
      copyItems.push(item.exercises);
    });
    const sumWithInitial = copyItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
     initialValue,
    );*/
    return (
        <p>Number of exercises {total}</p>
    )
}


const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}  
  </p>

const Content = ({ parts }) => {
  return(
    parts.map(part => 
      <Part key={part.id}
        part={part}
      />
    )
  )
}

    

const Course = ({ courses }) => {
    return (
        <div>
        <Header course={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    )
  }
  
  export default Course