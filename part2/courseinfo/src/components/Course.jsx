
const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => { 
  const Total = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
        <p>Total of {Total} exercises </p>
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
    courses.map(course=>
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
    )
  }
  
  export default Course