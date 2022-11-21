import Axios from 'axios'
import {API_BASE_URL} from "../config/constants";

export const client = Axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
    baseURL: API_BASE_URL,
})

export function service() {

    return {
        getAllActions: function () {
            return client.get("/action")
        }
    }
}
