"use client"

import { fetchData } from "../lib/getData.js"
import './Card.css';


export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function WelcomeCard() {
  // const [data, setData] = useState({ message: '', version: '' });

  // useEffect(() => {
  //   fetch('api/')
  //     .then(response => response)
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  // console.log(data);
  fetchData();
  // return (
  //   <Card>
  //     {fetchData()}
  //     {/* <h2>{data.message}</h2>
  //     <div>Version: {data.version}</div> */}
  //   </Card>
  // );
}