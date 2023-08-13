import $api from "../http";


export const getProducts = async (offset=0, limit=10) => {
  try {
    const response = await $api.get(`/products?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (e) {
    alert(e.response.data.message)
  }
}