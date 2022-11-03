import axios from 'axios';

export const api = axios.create({
	  // baseURL: `${process.env.BACKEND_URL}`,
	  baseURL: 'http://localhost:3333',
	  
});