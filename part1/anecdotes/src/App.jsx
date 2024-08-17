import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>

const Anecdote = ({text, votes}) => {
  return (
    <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
    </div>
  )
}

const MaxVotes = ({votes, anecdotes}) => {
  const v = Math.max(...votes)
  const i = votes.indexOf(v)
  if(v===0){
    return (
      <p>No votes yet</p>
    )
  }
  return (
    <Anecdote text={anecdotes[i]} votes={votes[i]} />
  )
}

const Button = ({onSmash, text}) => {
  return(
    <button onClick={onSmash} >{text}</button>
  )
}

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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const handleClick = () => {
    const nSelected = Math.floor(Math.random()* anecdotes.length)
    setSelected(nSelected)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <Title title="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button onSmash={handleVote} text="vote" />
      <Button onSmash={handleClick} text="next anecdote" />
      <Title title="Anecdote with the most votes" />
      <MaxVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App