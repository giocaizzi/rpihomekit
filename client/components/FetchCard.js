import useFetch from '@/libs/fetch.js';
import Card from '@/components/Card';


export function FetchCard(endpoint = '/') {
  const { data, loading, error } = useFetch(endpoint);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (<Card props={data} />);
}
