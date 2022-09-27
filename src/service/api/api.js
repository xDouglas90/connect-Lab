import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

export const createSession = async (email, password) => {
  return await api.post(
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
  return await api.post(
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

export const editUser = async (data, token, id) => {
  return await api.put(
    `users/${id}`,
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
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getUserLocations = async (token) => {
  return await api.get('locals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserDevices = async (id, token) => {
  return await api.get(`userDevices/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const putDeviceState = async (id, token, state) => {
  return await api.put(
    `userDevices/${id}`,
    JSON.stringify({
      is_on: state,
    }),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const deleteDevice = async (id, token) => {
  return await api.delete(`userDevices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const postDevice = async (token, user, device, local, room) => {
  return await api.post(
    `userDevices`,
    JSON.stringify({
      user,
      device,
      is_on: true,
      local,
      room,
    }),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getDevices = async (token) => {
  return await api.get(`devices`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
