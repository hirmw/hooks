import {useState, useMemo, useCallback} from 'react';

export const Fetch = url => {
   
 
    console.log('url' + url)

    const [state, setState] = useState([])
     
        const goGetter = useCallback(() => 
           { console.log('called')
                fetch(url)
                
                .then(x => x.json())

                .then(y => setState(y))
           },
            [url],
             )

    useMemo(() => goGetter(url),[goGetter, url])

    return state
}
