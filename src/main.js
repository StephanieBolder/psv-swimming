import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.config.productionTip = false

const apiUrl = "http://localhost:5000";

//AUTOMATICALLY ADD THE ACCESS TOKEN FOR EACH API CALL IF POSSIBLE
axios.interceptors.request.use((config) => {
  config.url = apiUrl.concat(config.url);

  if (localStorage.getItem("access_token") != null) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("access_token");
  }
  return config;
});

//IF THE TOKEN IS EXPIRED, AUTOMATICALLY LOGOUT USER
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      console.log("Error");
    } else {
      if (error.response.status === 401) {
        // UNAUTHORIZED (Because token is no longer valid, so redirect user to logout to remove invalid token)
        if (router.currentRoute.name != "login") {
          console.log("Your session has expired")
        }
        // Login request failed
        else if (error.response.config.url.indexOf("authenticate") !== -1) {
          console.log(error.response.data);
        }
        if (localStorage.getItem("access_token") != null) {
          localStorage.removeItem("access_token");
        }
        router.push("/logout");
      } else if (error.response.status === 403) {
        // A user is not permitted to access this endpoint
        console.log(error.response.data);
      } else {
        console.log("error");
      }
    }
    return Promise.resolve({ error });
  }
);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
