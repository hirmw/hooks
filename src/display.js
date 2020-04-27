
import React from "react";

export const Display = (props) =>  {


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
    <div  style={style} >

        {props.results.map(x => <div style={style}> {x.callsign} </div>)}
  
    </div> 

    )
};

