import axios from 'axios';

const carInstance = axios.create({
  baseURL: 'https://65cdee88c715428e8b3f8136.mockapi.io',
});

export const requestCar = async (page = 1, perPage = 12) => {
  try {
    const { data } = await carInstance.get(
      `/adverts?limit=${perPage}&page=${page}`
    );
    return data;
  } catch (error) {
    throw new Error('Oops Error');
  }
};
