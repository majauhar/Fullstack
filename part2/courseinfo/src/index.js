import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
    let sum = 0
    return(
        <div>
            <h1>{course.name}</h1>
                {course.parts.map(part => {
                    sum += part.exercises
                    return (
                    <p key={part.id}>{part.name} {part.exercises}</p>
                )}
                )
                }
            <h3>total of {sum} exercises</h3>
        </div>
    )
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
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
            id: 5
        }

      ]
    }
  
    return <Course course={course} />
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)