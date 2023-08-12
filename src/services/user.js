import axios from "axios";
import { API_URL } from "../constants/constants";


export const logIn = async (email, password, setIsLoggedIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    })
    localStorage.setItem('token', response.data.access_token)
    setIsLoggedIn(true);
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const logOut = async (setIsLoggedIn) => {
  localStorage.removeItem('token')
  setIsLoggedIn(false);
}
