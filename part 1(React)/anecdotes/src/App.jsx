import { useState } from 'react'

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
  const [saveVotes, setSavedVotes] = useState(new Uint8Array(anecdotes.length))
  const [anecdote, setAnecdote] = useState('')

  const handleAnecdotes = () => {
    let randomNumber =  Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber)
  }

  const handleVotes = () => {
    let newNumOfVotes = saveVotes[selected] + 1
    let newArr = [...saveVotes]
    newArr[selected] = newNumOfVotes
    setSavedVotes(newArr)
    getAnecdoteWithMostVotes(newArr)
  }

  const getAnecdoteWithMostVotes = (saveVotes) => {
    const max = saveVotes.reduce((a, b) => Math.max(a, b), -Infinity);
    let index
    for (let i = 0; i < saveVotes.length; i++) {
      if(saveVotes[i] === max) {
        index = i
        break
      }
    }
    setAnecdote(anecdotes[index])
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {saveVotes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleAnecdotes}>next anectode</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote}</p>
    </div>
  )
}

export default App