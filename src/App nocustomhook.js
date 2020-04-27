import React, { useState} from 'react';


function App() {


const [{flight}, setflightData] = useState({flight: []});
const [reg, setreg] = useState("");


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
     <input style={instyle} name='reg' value={reg} onChange={(e) => setreg(e.target.value)} />
     
     </div>
   
  );
}

export default App;