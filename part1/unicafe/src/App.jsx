import { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ onSmash, title }) => <button onClick={onSmash}>{title}</button>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine title="good" stati={good} />
        <StatisticLine title="neutral" stati={neutral} />
        <StatisticLine title="bad" stati={bad} />
        <StatisticLine title="all" stati={all} />
        <StatisticLine title="average" stati={(good - bad) / all} />
        <StatisticLine title="positive" stati={(good / all) * 100 + " %"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ title, stati }) => (
  <tr>
    <td>{title}</td>
    <td>{stati}</td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Title title="give feedback" />
      <Button onSmash={increaseGood} title="good" />
      <Button onSmash={increaseNeutral} title="neutral" />
      <Button onSmash={increaseBad} title="bad" />
      <Title title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
