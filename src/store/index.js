import Vue from "vue";
import Vuex from "vuex";
import types from "./constants";
import game from "./modules/game";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playPhase: true,
    selectedCategories: [],
  },
  mutations: {
    [types.PLAY.SET_PLAY_PHASE]: (state, flag) => (state.playPhase = flag),
    [types.CATEGORIES.SET_SELECTED_CATEGORIES]: (state, item) =>
      state.selectedCategories.push(item),
    [types.CATEGORIES.DELETE_SELECTED_CATEGORY]: (state, item) => {
      const newList = state.selectedCategories.filter((el) => el !== item);
      state.selectedCategories = [...newList];
    },
  },
  actions: {
    [types.PLAY.UPDATE_PLAY_PHASE]: ({ commit }, flag) => {
      commit("SET_PLAY_PHASE", flag);
    },
    [types.CATEGORIES.UPDATE_SELECTED_CATEGORIES]: ({ commit }, item) => {
      commit("SET_SELECTED_CATEGORIES", item);
    },
    [types.CATEGORIES.DELETE_SELECTED_CATEGORY]: ({ commit }, item) => {
      commit("DELETE_SELECTED_CATEGORY", item);
    },
  },
  getters: {
    [types.PLAY.GET_PLAY_PHASE]: (state) => state.playPhase,
    [types.CATEGORIES.GET_SELECTED_CATEGORIES]: (state) =>
      state.selectedCategories,
  },
  modules: { game },
});
