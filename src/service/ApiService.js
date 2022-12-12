import Axios from 'axios'
import {ACCESS_TOKEN, API_BASE_URL} from "../config/constants";


export function service() {

    const client = Axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "Authorization": "none"

        },
        withCredentials: true,
        baseURL: API_BASE_URL,
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        client.interceptors.request.use(req => {
            req.headers.authorization = "Bearer " + localStorage.getItem(ACCESS_TOKEN)
            return req;
        });
    }


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
        registerTriggerType: function (triggerType) {
            return client.post('/triggerType', triggerType)
        },
        getAllActionPlatforms: function () {
            return client.get("/actionTypes/platforms")
        },
        getActionTypesByPlatform: function (platform) {
            return client.get(`/actionTypes/platform/${platform}`)
        },
        registerActionType: function (actionType) {
            return client.post('/actionTypes', actionType)
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
        getUserById: function (userId) {
            return client.get(`/user/${userId}`)
        },
        getCurrentUser: function () {
            return client.get(`/user`)
        },
        getPlatformLogin: function (scopes) {
            return client.get(`/platform/spotify/authorizationUrl`,{params: {scopes: scopes}})
        },
        getOAuthToken: function (platformName, userId, code) {
            return client.get(`/platform/${platformName}/oauthToken/${userId}`, {params: {code: code}})
        },
        getPlatformScopes: function (platformName) {
            return client.get(`/platform/${platformName}/oauthScopes`)
        },



    }
}
