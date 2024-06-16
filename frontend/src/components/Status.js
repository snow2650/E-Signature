// frontend/src/components/Status.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Status = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/docs/status');
        setStatus(response.data);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div>
      {status ? (
        <div>Document Status: {status}</div>
      ) : (
        <div>Loading status...</div>
      )}
    </div>
  );
};

export default Status;
