import { API_URL } from '../constants';


// GET METHOD

export const API = {
  get: async (uri, params) => {
    const url = `${API_URL}${uri}?` + new URLSearchParams(params);
    const user = JSON.parse(localStorage.getItem('auth'))?.user;

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'user_id': user?.id,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },



  // POST METHOD
  post: async (uri, payload) => {
    const user = JSON.parse(localStorage.getItem('auth'))?.user;

    const response = await fetch(`${API_URL}${uri}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'user_id': user?.id,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const res = await response.json();
      throw new Error(res.error);
    }

    return response.json();
  },
};
