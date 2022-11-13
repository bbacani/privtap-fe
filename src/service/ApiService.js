import Axios from 'axios'

export const client = Axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
    baseURL: process.env.REACT_APP_PRIVTAP_BACKEND_PATH || 'http://privtap-lb-dev-393894998.eu-central-1.elb.amazonaws.com/',
   // baseURL: process.env.REACT_APP_PRIVTAP_BACKEND_PATH || 'http://localhost:8080/',
})

export function service() {

    return {
        getAllActions: function () {
            return client.get("/action")
        }
    }
}
