// Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

// The application must display the total number of collected feedback for each category
import { useState } from 'react'

const StatisticsLine = ({stat, value}) => {
  console.log(stat)
  console.log(value)
   if(stat === "positive") {
    stat= "Positive %"
  }

  return (
      <li key={value}>{stat}: {value}</li>
    )
}

const Statistics = ({votes}) => { 
  const {good, neutral, bad} = votes;
  let total = good + neutral + bad;
  let displayComponent = total > 0;

  let avg = displayComponent ? (good - bad) / (total) : 0
  let positive = displayComponent ? (good / (total)) * 100 : 0
  
  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: avg,
    positive: positive
  }

  const keys = Object.keys(values);

  if(displayComponent) {
    return (
    <>
      <h2>Statistics</h2>
      {keys.map((key) => <StatisticsLine key={key} stat={key} value={values[key]} />)}
    </>
    )}else{
    return (
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  )}
}

const FeedbackBttn = ({value, handleButton}) => {
  return (
    <button value={value} onClick={handleButton} key={value}>{value}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const values = { 
    good: good,
    neutral: neutral,
    bad: bad,
  }

  const handleButton = (e) => {
    const reaction = e.target.value;
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
      <FeedbackBttn value={"good"} handleButton={handleButton} />
      <FeedbackBttn value={"neutral"} handleButton={handleButton} />
      <FeedbackBttn value={"bad"} handleButton={handleButton} />
      <Statistics votes={values}/>
    </div>
  )
}

export default App