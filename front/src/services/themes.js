import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

export async function getThemes() {
  try {
    const res = await axios.get(`${VITE_BASE_URL}/theme/`);
    return res?.data?.themes;
  } catch (error) {
    throw new Error(error);
  }
}
