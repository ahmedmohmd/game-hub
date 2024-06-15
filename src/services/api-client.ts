import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4f767cb6962b40b09489a9cc5567f186',
  },
});
