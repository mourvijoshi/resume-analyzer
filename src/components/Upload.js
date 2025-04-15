import React from 'react';
import '../styles.css'; 

function Upload() {
  return (
    <div className="upload">
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf, .doc, .docx" />
      <br />
      <button>Analyze Resume</button>
    </div>
  );
}

export default Upload;
