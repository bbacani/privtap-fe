import Axios from 'axios'

export const axios = Axios.create({
  headers: { 'Access-Control-Allow-Origin': '*' },
  withCredentials: true,
  baseURL: process.env.REACT_APP_PRIVTAP_BACKEND_PATH || 'http://privtap-lb-dev-393894998.eu-central-1.elb.amazonaws.com/',
})
