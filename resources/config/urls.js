export const API_BASED_URL = "https://olx.devoa.xyz/api"

export const getApiUrl =(endpoint) => API_BASED_URL +endpoint

export const LOGIN = getApiUrl("/login") 