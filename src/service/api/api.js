import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

export const createSession = async (email, password) => {
  return api.post(
    'auth/login',
    JSON.stringify({
      email,
      password,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const createUser = async (data) => {
  return api.post(
    'auth/register',
    JSON.stringify({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      photoUrl: data.photoUrl,
      phone: data.phone,
      userAddress: {
        zipCode: data.zipCode,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        complement: data.complement,
      },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getUserLocations = async (token) => {
  return api.get('locals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserDevices = async (id, token) => {
  return api.get(`userDevices/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
