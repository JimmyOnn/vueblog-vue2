import {createStore} from 'vuex'

export default createStore({
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            localStorage.setItem("token", token)
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
            localStorage.setItem("userInfo", userInfo)
        }
    },
    getters: {},
    actions: {},
    modules: {}
})
