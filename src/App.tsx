import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');

  useEffect(() => {
    axios.get('/api/code')
      .then(response => {
        setCode(response.data.code);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Random Code Generator</h1>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
