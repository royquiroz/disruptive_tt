import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

export async function getContent() {
  try {
    const res = await axios.get(`${VITE_BASE_URL}/content/`);
    return res?.data?.content;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createContent(body) {
  try {
    const res = await axios.post(`${VITE_BASE_URL}/content`, body);
    return res?.data;
  } catch (error) {
    throw new Error(error);
  }
}
