import axios from "axios";
import { API_URL } from "../constants/constants";


export const getProducts = async (offset=0, limit=10) => {
  try {
    const response = await axios.get(`${API_URL}/products?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (e) {
    alert(e.response.data.message)
  }
}