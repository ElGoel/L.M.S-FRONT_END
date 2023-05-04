import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api', //* Base URL will be completed with the endpoints of our backend app
  responseType: 'json',
});
