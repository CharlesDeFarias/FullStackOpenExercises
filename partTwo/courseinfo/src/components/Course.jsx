const Header = ({courseTitle}) => <h1>{courseTitle}</h1>

const Part = ({number, title, count}) => <li key={number}> Part: {number} - {title} - Exercises: {count}</li>

const Content = ({parts}) => {
  return (
    <>
        {parts.map((part) => <Part key={part.number} number={part.number} title={part.title} count={part.exerciseCount} />)}
    </>
  )
}

const Total = ({parts}) => {
  return (
    <p>Total number of exercises: {parts.reduce((acc, part) => acc + part.exerciseCount, 0)}</p>
  )
}

const Course = ({course}) => {
  const title = course.title
  const parts = course.parts
  
  return (
    <div>
      <Header courseTitle={title} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course;