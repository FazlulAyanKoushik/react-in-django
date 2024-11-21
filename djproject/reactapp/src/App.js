import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [djangoData, setDjangoData] = useState(null);

  useEffect(() => {
    // Access data from Django
    const data = window.__DJANGO_CONTEXT__;
    setDjangoData(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {djangoData ? (
          <div>
            <h2>Data from Django:</h2>
            <p>{djangoData.message}</p>
            <p>User: {djangoData.user.name}</p>
            <ul>
              {djangoData.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading Django data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
