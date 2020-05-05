import React, { useState } from 'react';
import {Display} from './display.js';
import {Fetch} from './fetch'

const App = () => {

  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [timea, settimea] = useState("");
  const [timeb, settimeb] = useState("");


const data = Fetch('https://opensky-network.org/api/flights/departure?airport=EGLL&begin='+timea+'&end='+timeb)

const startTime = (event) => {
  setstart(event.target.value)
}

const endTime = (event) => {
  setend( event.target.value)
}

const getEpoch = (stamp) => {

  let myDate = new Date(stamp)
  let myEpoch = myDate.getTime()/1000.0;
  return myEpoch
}

const change = (event) => {

    event.preventDefault();
    const a = getEpoch(start)
    const b = getEpoch(end)
    settimea(a)
    settimeb(b)


}



const style ={
  margin: 'auto',
  left: '50%',
  width: '80%',
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
  textAlign: 'center',
  marginleft:'100px'
}

 
  return (
    <div>

<div style={style}>
      <form onSubmit={change} >
        <p>
          <input type='text' onChange= {startTime} placeholder='start time'></input>
          <input type='text' onChange= {endTime} placeholder='end time'></input>
          <button> getFlights </button>
        </p>
        </form>
    </div>
      <Display results={data} />
    </div>
 
  )
}

export default App;
