// Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

// The application must display the total number of collected feedback for each category
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButton = (e) => {
    const reaction = e.target.value;
    console.log(reaction)
    if (reaction === "good") {
      setGood(good + 1)
    } else if (reaction === "neutral") {
      setNeutral(neutral + 1)
    } else if (reaction === "bad") {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button value={"good"} onClick={handleButton}>Good</button>
      <button value={"neutral"} onClick={handleButton}>Neutral</button>
      <button value={"bad"} onClick={handleButton}>Bad</button>
      <h2>Statistics</h2>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {good + neutral + bad}</li>
      <li>Average: {(good - bad) / (good + neutral + bad)}</li>
      <li>Positive %: {(good / (good + neutral + bad)) * 100}%</li>
    </div>
  )
}

export default App