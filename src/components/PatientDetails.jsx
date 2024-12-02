import React from 'react';
import BloodPressureChart from './BloodPressureChart'; // Import the Chart Component

const PatientDetails = ({ patient }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={patient.profile_picture}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{patient.name}</h1>
          <p className="text-gray-500">{patient.age} years old</p>
          <p className="text-gray-500">Gender: {patient.gender}</p>
          <p className="text-gray-500">Insurance: {patient.insurance_type}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Diagnosis History</h2>
        {patient.diagnosis_history.map((item, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-semibold text-gray-700">
              {item.month} {item.year}
            </h3>
            <div className="flex space-x-6">
              <div>
                <p className="text-gray-500">Systolic: {item.blood_pressure.systolic.value} - {item.blood_pressure.systolic.levels}</p>
                <p className="text-gray-500">Diastolic: {item.blood_pressure.diastolic.value} - {item.blood_pressure.diastolic.levels}</p>
              </div>
              <div>
                <p className="text-gray-500">Heart Rate: {item.heart_rate.value} - {item.heart_rate.levels}</p>
                <p className="text-gray-500">Respiratory Rate: {item.respiratory_rate.value} - {item.respiratory_rate.levels}</p>
                <p className="text-gray-500">Temperature: {item.temperature.value}°F - {item.temperature.levels}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blood Pressure Chart */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Blood Pressure Over Time</h2>
        <BloodPressureChart data={patient.diagnosis_history} />
      </div>
    </div>
  );
};

export default PatientDetails;
