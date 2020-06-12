import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from "../components/Index"
import HelloWorld from "../components/HelloWorld"
import Login from "../components/Login"
import Register from "../components/Register"

let routes = [
    {
        path: "/",
        name: "index",
        component: Index
    },
    {
        path: "/hello",
        name: "hello",
        component: HelloWorld
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
]

export default new VueRouter({
    routes
})