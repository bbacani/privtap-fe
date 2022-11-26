import Axios from 'axios'

export const client = Axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
    baseURL: process.env.REACT_APP_PRIVTAP_BACKEND_PATH || 'http://privtap-lb-dev-393894998.eu-central-1.elb.amazonaws.com/',
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
            return client.get("/triggerTypes/platform/" + platform)
        },
        getAllActionPlatforms: function () {
            return client.get("/actionTypes/platforms")
        },
        getActionTypesByPlatform: function (platform) {
            return client.get("/actionTypes/platform/" + platform)
        },
        //TODO: add the parameter userId, now it's hardcoded
        addAutomation: function(automation) {
            return client.post("/automation/6380aa31e390fb141265465a", automation)
        }
    }
}
