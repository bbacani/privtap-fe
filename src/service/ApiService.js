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
        registerTriggerType: function (triggerType){
            return client.post('/triggerType',triggerType)
        },
        getAllActionPlatforms: function () {
            return client.get("/actionTypes/platforms")
        },
        getActionTypesByPlatform: function (platform) {
            return client.get(`/actionTypes/platform/${platform}`)
        },
        registerActionType: function (actionType){
            return client.post('/actionTypes',actionType)
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
