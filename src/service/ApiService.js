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
        },
        getAllTriggerTypes: function () {
            return client.get("/triggerTypes")
        },
        getAllTriggerPlatforms: function () {
            return client.get("/triggerTypes/platforms")
        },
        getTriggerTypesByPlatform: function (platform) {
            return client.get(`/triggerTypes/platform/${platform}`)
        },
        getAllActionPlatforms: function () {
            return client.get("/actionTypes/platforms")
        },
        getActionTypesByPlatform: function (platform) {
            return client.get(`/actionTypes/platform/${platform}`)
        },
        //TODO: add the parameter userId, now it's hardcoded
        addAutomation: function(automation) {
            return client.post("/automation/6380aa31e390fb141265465a", automation)
        },
        getAllAutomations: function (userId) {
            return client.get("/automation/" + userId)
        },
        addAutomation: function (userId, automationRequest) {
            return client.post(`/automation/${userId}`, automationRequest)
        },
        deleteAutomation: function (userId, automation) {
            return client.delete(`/automation/${userId}`, automation)
        },
        getAllUserAutomations: function (userId) {
            return client.get(`/automation/${userId}`)
        },
        getUserById: function(userId){
            return client.get(`/user/${userId}`)
        },
    }
}
