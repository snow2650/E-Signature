// frontend/src/App.js
import React from 'react';
import Upload from './components/Upload';
import Status from './components/Status';

const App = () => {
  return (
    <div>
      <h1>E-Signature Integration Platform</h1>
      <Upload />
      <Status />
    </div>
  );
};

export default App;
