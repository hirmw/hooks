import { useEffect, useState } from "react";

export const useFetch = url => {
  
  const [state, setState] = useState({data: null});


  useEffect(() => {
    fetch(url)
      .then(x => x.json())
      .then(y => {
          
          setState({data: y.quote});

      });
  }, [url, setState]);

  //console.log('state' + state)

  return state;
};