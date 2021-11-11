import axios from "axios";

const API_URL = "http://localhost:8000/";
const RECOURSE = "task";

export const fetchTasks = async () => {
  try {
    const tasks = await axios.get(`${API_URL}${RECOURSE}`);
    return tasks.data;
  } catch (error) {
    console.log(error);
  }
};

export const postTask = async (taskObj) => {
  try {
    const response = await axios.post(
      `${API_URL}${RECOURSE}`, {
      id: 1234,
      title: 'titulo de prueba'
    }, {
      method: 'post',
      headers: {
        'Content-Type': 'text/plain'}
    }
    );  
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};