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
        getAllTriggerTypes: function () {
            return client.get("/triggerTypes")
        },
        getAllTriggerPlatforms: function () {
            return client.get("/platform/triggerPlatforms")
        },
        getTriggerTypesByPlatform: function (platformName) {
            return client.get(`/platform/${platformName}/allTriggerTypes`)
        },
        registerTriggerType: function (platformName, triggerType) {
            return client.post(`/${platformName}/triggerType`, triggerType)
        },
        getAllActionPlatforms: function () {
            return client.get("/platform/actionPlatforms")
        },
        getActionTypesByPlatform: function (platformName) {
            return client.get(`/platform/${platformName}/allActionTypes`)
        },
        registerActionType: function (platformName, actionType) {
            return client.post(`/${platformName}/actionTypes`, actionType)
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
        sendFormData: function(userId, formData) {
            //TODO: add the endpoint
            console.log(userId)
            console.log(formData)
        },
        getOauthScopes: function(platform) {
            return client.get(`/platform/${platform}/oauthScopes`)
        },
        getMissingOauthScopes: function(userId, platform) {
            //TODO: change with the right endpoint
            return client.get(`/platform/${platform}/oauthScopes`)
        },
        addOAuthScopes: function(userId, platform, scopes) {
            //TODO: add the endpoint
            console.log("UserId:" + userId)
            console.log("Platform: " + platform)
            console.log("Selected OAuth Scopes: " + scopes)
        }
    }
}
