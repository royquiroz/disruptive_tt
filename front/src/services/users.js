import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

export async function createUser(user) {
  try {
    const res = await axios.post(`${VITE_BASE_URL}/user/register`, user);
    return res?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function authUser(user) {
  try {
    const res = await axios.post(`${VITE_BASE_URL}/user/auth`, user);
    return res?.data?.user[0];
  } catch (error) {
    throw new Error(error);
  }
}
