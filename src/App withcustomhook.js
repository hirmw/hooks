import React, { useState} from 'react';
import {useForm} from './useForm';


function App() {


const [{flight}, setflightData] = useState({flight: []});
const [values, setValue] = useForm("");


async function data(){

  const num = await fetch('https://opensky-network.org/api/flights/departure?airport=EGLL&begin=1583830800&end=1583832600');
  const num1 = await num.json();
  const total = []
  num1.map( icoa => total.push(icoa.callsign))
  setflightData({flight: total})   

}

  data()

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
  const instyle ={
    margin: 'auto',
    width: '80%',
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textAlign: 'center',  
}


  return (

   
    <div>
    

    {flight.map( callName => 
    <div style={style}> 
                  
                  {callName} 
      </div>

     
    )}
    <div style={style}>
     <input  name='reg' value={values} onChange={setValue} />
     </div>
     </div>
   
  );
}

export default App;