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
        getPlatformLogin: function (scopes) {
            return client.get(`/platform/spotify/authorizationUrl?scopes=${scopes.map((scope) => scope).join(',')}`)
        },
        getOAuthToken: function (platformName, userId, code) {
            return client.get(`/platform/${platformName}/oauthToken/${userId}`, {params: {code: code}})
        },
        getPlatformScopes: function (platformName) {
            return client.get(`/platform/${platformName}/oauthScopes`)
        },
        getPlatformNames: function () {
            return client.get(`/platform/`)
        },
        getPlatformByName: function (platformName) {
            return client.get(`/platform/${platformName}/name`)
        }
    }
}
