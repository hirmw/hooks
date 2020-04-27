
import { useState, useEffect } from "react";

function useFetch() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchUrl() {
    const response = await fetch('https://opensky-network.org/api/flights/departure?airport=EGLL&begin=1583830800&end=1583832600'
    );
    const json = await response.json();
    setData(json);
    setLoading(false);
    console.log('called')
  }

  useEffect(() => {
    fetchUrl();
  }, [data]);
  return [data, loading];
}

export { useFetch };