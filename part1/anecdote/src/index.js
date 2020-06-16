import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const handler = () => {
    setSelected((Math.floor(Math.random() * 10)) % 6)
  }
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const hightestVote = () => {
    let min = votes[0]
    let index = 0
    for(let i = 1; i < 6; i++){
        if(votes[i] > min){
          min = votes[i]
          index = i
        }
    }
    return index
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>
        vote
      </button>
      <button onClick={handler}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[hightestVote()]}</p>
      <p>has {votes[hightestVote()]} votes</p>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)