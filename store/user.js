import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

export const state = () => ({
  user: null,
  registerMessage: null,
  registerSuccess: false,
  registerError: false,
  //------------------//
  loginSuccess: false,
  loginError: false,
  LoginMessage: null
});

export const mutations = {
  registerUser(state, res) {
    if (res.success) {
      state.registerError = false;
      state.registerMessage = res.message;
      state.registerSuccess = true;
    } else {
      state.registerSuccess = false;
      state.registerMessage = res.message;
      state.registerError = true;
    }
  },
  loginUser(state, res) {
    if (res.success) {
      state.loginError = false;
      state.loginMessage = res.message;
      state.loginSuccess = true;
      state.user = res.user;
      this.$router.push("/")
    } else {
      state.loginSuccess = false;
      state.loginMessage = res.message;
      state.loginError = true;
    }
  },
  logoutUser(state) {
    state.loginSuccess = false;
    state.loginError = false;
    state.user = null;
    state.loginMessage = null;
    state.registerSuccess = false;
    state.registerError = false;
    state.registerMessage = null;
  }
};

export const actions = {
  register({ commit }, formData) {
    axios
      .post("http://localhost:4000/api/user/register", formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      })
      .then(res => {
        commit("registerUser", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  login({ commit }, formData) {
    axios
      .post("http://localhost:4000/api/user/login", formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      })
      .then(res => {
        commit("loginUser", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  logout({ commit }) {
    commit("logoutUser");
  }
};
