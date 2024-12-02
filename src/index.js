const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatientData = async () => {
  const response = await fetch(`${API_URL}/patients`);
  const data = await response.json();
  return data;
};
