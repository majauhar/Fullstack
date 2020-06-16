import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) =>
    sum + part.exercises, 0
    )
  
  return(
        <div>
            <h3>{course.name}</h3>
                {course.parts.map(part => 
                    <p key={part.id}>
                      {part.name} {part.exercises}
                    </p>
                )
                }
            <h4>total number of {total} exercises</h4>
        </div>
    )
}

const App = () => {

const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
    return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course} /> )}
    </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)