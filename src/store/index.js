import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  slotNames: ["Left Wing", "Left Flank", "Tank", "Right Flank", "Right Wing"],
  slotContents: [0, 1, 2, 3, 4],
  heroes: [
    { id: 0, name: "Tiburtus" },
    { id: 1, name: "Little John" },
    { id: 2, name: "Vela" },
    { id: 3, name: "Guardian Falcon" },
    { id: 4, name: "Neith" }
  ]
};

const getters = {
  slotNames: state => state.slotNames,
  slotContents: state => state.slotContents,
  heroes: state => state.heroes
};

const actions = {
  equipHeroInSlot(context, { slotIndex, heroId }) {
    const currentContents = context.state.slotContents[slotIndex];
    if (heroId === currentContents) return;

    context.commit("updateSlotContents", { slotIndex, heroId });
  }
};

const mutations = {
  updateSlotContents(state, { slotIndex, heroId }) {
    Vue.set(state.slotContents, slotIndex, heroId);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {}
});
