import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  slotNames: ["Left Wing", "Left Flank", "Tank", "Right Flank", "Right Wing"]
};

const getters = {
  slotNames: state => state.slotNames
};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {}
});
