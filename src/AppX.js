import React from 'react';
import {Display} from './DisplayX';
import {Fetch} from './FetchX'

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
