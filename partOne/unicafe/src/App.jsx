//consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. 
// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and 
// Total renders the total number of exercises.
const App = () => {
 
  const course ={
    title: 'Half Stack application development',
    parts: [{
      number: 1,
      title: 'Fundamentals of React',
      exerciseCount: 10,
      },{
        number: 2,
        title: 'Using props to pass data',
        exerciseCount: 7
      },{
        number: 3,
        title: 'State of a component',
        exerciseCount: 14
      }],
  }

  const Header = ({courseTitle}) => <h1>{courseTitle}</h1>

  const Content = ({parts}) => {
    const Part = ({number, title, count}) => <li key={number}> Part: {number} - {title} - Exercises: {count}</li>

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
  console.log(course.title)

  return (
    <div>
      <Header courseTitle={course.title} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App