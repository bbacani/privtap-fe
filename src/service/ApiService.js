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
            return client.post(`/serviceProvider/${platformName}/triggerType`, triggerType)
        },
        getAllActionPlatforms: function () {
            return client.get("/platform/actionPlatforms")
        },
        getActionTypesByPlatform: function (platformName) {
            return client.get(`/platform/${platformName}/allActionTypes`)
        },
        registerActionType: function (platformName, actionType) {
            return client.post(`/serviceProvider/${platformName}/actionType`, actionType)
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
        getPlatform: function (serviceProviderId) {
            return client.get(`/serviceProvider/platform/${serviceProviderId}`)
        },
        registerPlatform: function(serviceProviderId, data) {
           return client.post(`/serviceProvider/platform/${serviceProviderId}`,data)
        },
        getOauthScopes: function(userId, platform) {
            return client.get(`/platform/${platform}/oauthScopes`)
        },
        getActivatedOauthScopes: function(userId, platform) {
            return client.get(`/platform/${platform}/oauthScopes/${userId}`);
        },
        getMissingOauthScopes: function(userId, platform) {
            return client.get(`/platform/${platform}/unacceptedOauthScopes/${userId}`);
        },
        addOAuthScopes: async function (userId, platform, scopes) {
            const response = await client.post(`/platform/${platform}/authorizationUrl`, scopes)
            const url = response.data
            window.location.href = url;
        },
        addToken: async function (platform, code) {
            const user = await this.getCurrentUser()
            const userId = user.data.id
            console.log("Sending request to: " + `/platform/${platform}/oauthToken/${userId}?code=${code}`)
            return client.get(`/platform/${platform}/oauthToken/${userId}?code=${code}`);
        },
        getPlatformName: function(id) {
            //TODO: add the endpoint
            return id;
        },
        loginServiceProvider: function(data) {
            return client.post(`/serviceProvider/login`,data);
        },
        registerServiceProvider: function(data) {
            return client.post(`/serviceProvider/register`,data);
        },

    }
}
