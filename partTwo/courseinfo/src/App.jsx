//consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. 
// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and 
// Total renders the total number of exercises.
import Course from './components/Course'

const App = () => {
 
  const courses =[{
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
  },]


  return (
    <div>
    {courses.map((course) => (
      <Course key={course.title} course={course} />
    ))}
    </div>
  )
}

export default App