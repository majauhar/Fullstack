import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Statistics = (props) => {
  const {good, bad, neutral} = props
  if (good + bad + neutral === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>statistics</h1>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="all" value={good + neutral + bad} />
    <Statistic text="average" value={(good-bad)/(good+neutral+bad)} />
    <Statistic text="positive" value={good * 100 / (good + neutral + bad)} />
    </div>
  )

}

const Button = (props) => {
  return (
  <>
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)