import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/contacts`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        console.log(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);
  return (
    <div className="App">
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name, phoneNumber, contactPicture }) => (
            <li key={id}>
              <img
                src={`http://localhost:5000/${contactPicture}`}
                alt="back"
                className="leftArrow"
              />
              <h3>{name}</h3>
              <h4>{phoneNumber}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}
