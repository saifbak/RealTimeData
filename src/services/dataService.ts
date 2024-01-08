// dataService.ts
import axios from 'axios';

export const fetchData = async () => {
  //   return 'hello world';
  //   try {
  console.log('Response', ' response.data');
  const response = await axios
    .get('http://10.0.2.2.:3000/api/sensor/idkfa')
    .then(response => response)
    .catch(err => console.log('Error', err));
  // return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
};
