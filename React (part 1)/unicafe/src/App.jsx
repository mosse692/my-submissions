import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.extra}</td>
    </tr>
  )
}

const Statistics = (props) => {
  
  if(!props.feedback) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table feedback={props.feedback}>
      <StatisticLine text='good' value={props.goodCount}/>
      <StatisticLine text='neutral' value={props.neutralCount}/>
      <StatisticLine text='bad' value={props.badCount}/>
      <StatisticLine text='all' value={props.allCount}/>
      <StatisticLine text='average' value={props.average}/>
      <StatisticLine text='positive' value={props.positive} extra='%'/>
    </table>
  );
};

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [allCount, setAllCount] = useState(goodCount + neutralCount + badCount);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [feedback, setFeedback] = useState(false)

  const handleGoodClick = () => {
    let newGoodCount = goodCount + 1;
    setGoodCount(newGoodCount);
    let newAllCount = newGoodCount + neutralCount + badCount;
    setAllCount(newAllCount);
    setAverage((newGoodCount - badCount) / newAllCount);
    setPositive((newGoodCount / newAllCount) * 100);
    setFeedback(true)
  };

  const handleNeutralClick = () => {
    let newNeutralCount = neutralCount + 1;
    setNeutralCount(newNeutralCount);
    setAllCount(goodCount + newNeutralCount + badCount);
    setFeedback(true)
  };

  const handleBadClick = () => {
    let newBadCount = badCount + 1;
    setBadCount(newBadCount);
    let newAllCount = goodCount + neutralCount + newBadCount;
    setAllCount(newAllCount);
    setAverage((goodCount - newBadCount) / newAllCount);
    setPositive((goodCount / newAllCount) * 100);
    setFeedback(true)
  };

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div>
      <br />
      <h2>Statistics</h2>
      <Statistics feedback={feedback} goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} allCount={allCount} average={average} positive={positive} />
    </div>
  );
}

export default App;
