import axios from "axios"
//基础的源
axios.defaults.baseURL = "http://tt.linweiqin.com/api/tt/"
axios.interceptors.request.use(config => {
// Do something before request is sent
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});
axios.interceptors.response.use(response => {
// Do something before response is sent
return response.data;
},error => {
// Do something with response error
return Promise.reject(error);
});
//拦截修改后导出这个axios
export default axios;