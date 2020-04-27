import React, {useEffect,useState} from 'react';

export const useFetch = (url) => {

    const [flights, setflightData] = useState([]);
 

//will call whats in the brackets every render depending what is in []
//componentdidmount(wasrendered)(addeventlistener) // +componetwillunmount

     useEffect(
        () => {

            console.log('called')

            //const url = 'https://opensky-network.org/api/flights/departure?airport=EGLL&begin=1583830800&end=1583832600'
                //.then negates the need to create an async function and then callit            
            fetch(url)
                //.then(x => console.log(x.json()))
                .then(x => x.json() )
                //.then(y => console.log(y[0].callsign))
                .then(y => {setflightData(y)})
            
        }, [url]);
    
    //console.log('end' + flights)
    return flights

};

// async function

// export const useFetch = (url) => {

//     useEffect( () => {
//         const f = async () => {
//             fetch(url)
//         }

//         f()
//     }, [input])

// }