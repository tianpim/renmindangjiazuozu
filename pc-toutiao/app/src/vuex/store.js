import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 这里定义初始值
let state = {
    loginUser: "",
    token: ""
};

/* 变动 */
const mutations = {

};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    submitLogin: function(state ,{params}) {
        this._vm.axios({
            method: "POST",
            url: "/loginCheck",
            data: {
                username: params.userName,
                password: params.userPw
            }
        }).then(({data}) => {
            this.state.loginUser = data.wdata.nickname;
            this.state.token = data.wdata.oauth_token;
        })
    }
};

// 返回改变后的数值
const getters = {

};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})