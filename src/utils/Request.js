import axios from 'axios';

export default function Request(url, params) {
  return axios({
    // baseURL: 'https://wd9777183800mbsljr.wilddogio.com/',
    baseURL: 'https://pizza-planet-77967.firebaseio.com/',
    url: url,
    method: 'get',
    ...params
  });
}
