import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 这里定义初始值
let state = {
<<<<<<< HEAD
    loginUser: "",
    token: ""
=======
    loginStatus: false,
    userInfo: {}
>>>>>>> 560d6fc7d3213f4217924a1f7ba9394b8959993d
};

/* 变动 */
const mutations = {
<<<<<<< HEAD

=======
    modifyLoginInfo: function(state ,{params}) {
        this.state.userInfo = params;
        this.state.loginStatus = true;
    }
>>>>>>> 560d6fc7d3213f4217924a1f7ba9394b8959993d
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
<<<<<<< HEAD
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
=======

>>>>>>> 560d6fc7d3213f4217924a1f7ba9394b8959993d
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