import axios from 'axios';

const baseURL = 'http://10.0.2.2:3000/';

type ISensorData = {
  id: string;
  timestamp: number;
  data: number;
};
let allFetchedData: ISensorData[] = [];

export const fetchData = async (): Promise<ISensorData[]> => {
  try {
    const response = await axios.get<ISensorData>(`${baseURL}api/sensor/iddqd`);
    allFetchedData.push(response.data);
    return allFetchedData;
  } catch (error) {
    throw error;
  }
};
