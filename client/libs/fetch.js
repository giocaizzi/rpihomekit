import { useState, useEffect } from 'react';

export function useFetch(endpoint) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4201';

  useEffect(() => {
    fetch(baseURL + endpoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
}