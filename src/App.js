import React from 'react';
import {Display} from './display.js';
import {Fetch} from './fetch'

const App = () => {


const data = Fetch('https://opensky-network.org/api/flights/departure?airport=EGLL&begin=1583830800&end=1583832600')


 
  return (
    <div>
    <div>{}</div>
    <Display results={data} />
    </div>
  )
}

export default App;
