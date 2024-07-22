import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const REACT_APP_RAPID_API_KEY =
  'f2774552f2msh297dea6e95ddcf9p1dd7fbjsn0156b178fc49';
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
