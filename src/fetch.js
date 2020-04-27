import {useState} from 'react';

export const Fetch = url => {

    const [state, setState] = useState([])

        console.log('called')
        fetch(url)
    
        //or stringify other side
            .then(x => x.json())
            //.then(y => console.log(y))
            .then(y => setState(y))
        
    return state
}