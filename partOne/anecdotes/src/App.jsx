import { useState } from 'react'
// 1.13: Expand your application so that you can vote for the displayed anecdote, store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.
// Now implement the final version of the application that displays the anecdote with the largest number of votes, If multiple anecdotes are tied for first place it is sufficient to just show one of them.

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleBtn = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleBtn}>Feed me another anecdote</button>
    </div>
  )
}

export default App