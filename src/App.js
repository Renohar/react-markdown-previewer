import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; 
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleText = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="box">

      <div className="left-box">
        <h1>Enter Markdown</h1>
        <p>Add Markdown or normal HTML Tags.</p>
        <textarea  onChange={handleText}></textarea>
      </div>

      <div className="right-box">
        <h2>Markdown Preview:</h2>
        <div id="preview"></div>
      </div>
      
    </div>
  );
}

export default App;
