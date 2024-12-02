import React, { useState, useEffect } from 'react';
import PatientDetails from "./components/PatientDetails";
import axios from 'axios';

function App() {
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            // Fixed the Authorization header by adding "Basic " before the base64 credentials
            Authorization: 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
          }
        });

        if (response.data && response.data.length > 0) {
          setPatientData(response.data[0]); // Assuming the response is an array and you want the first patient
        } else {
          setError('No patient data found.');
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setError('An error occurred while fetching the data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {error && (
        <div className="flex justify-center items-center h-full text-red-500">
          {error}
        </div>
      )}
      {!error && patientData ? (
        <div className="container mx-auto p-6">
          <PatientDetails patient={patientData} />
        </div>
      ) : (
        !error && (
          <div className="flex justify-center items-center h-full">Loading...</div>
        )
      )}
    </div>
  );
}

export default App;
