import $api from "../http";


export const logIn = async (email, password, setIsLoggedIn) => {
  try {
    const response = await $api.post(`/auth/login`, {
      email,
      password
    })
    localStorage.setItem('token', response.data.access_token)
    localStorage.setItem('refresh_token', response.data.refresh_token)
    setIsLoggedIn(true);
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const logOut = async (setIsLoggedIn) => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
  setIsLoggedIn(false);
}
