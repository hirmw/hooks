import React, {useState, useCallback} from "react";
import { Usefetch } from "./display";

export const Url = (props) => {

    
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

    const styleb ={
    
        margin: 'auto',
        left: '10%',
        width: '20%',
        background: 'red',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textAlign: 'center',
        textColor: '#000000',
        marginleft:'100px'
    }
    

  
    return(

    <div style={style}>
        <button  style={styleb} onClick={() => props.get('https://opensky-network.org/api/flights/departure?airport=EGLL&begin=1583830800&end=1583832600')}>
        Go
        </button>
    </div>
  
    )
       
}