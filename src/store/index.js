import Vue from "vue";
import Vuex from "vuex";
import types from "./constants";
import game from "./modules/game";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playPhase: false,
    selectedCategories: [],
  },
  mutations: {
    [types.PLAY.mutations.SET_PLAY_PHASE]: (state, flag) =>
      (state.playPhase = flag),
    [types.CATEGORIES.mutations.SET_SELECTED_CATEGORIES]: (state, item) =>
      state.selectedCategories.push(item),
    [types.CATEGORIES.mutations.DELETE_SELECTED_CATEGORY]: (state, item) => {
      const newList = state.selectedCategories.filter((el) => el !== item);
      state.selectedCategories = [...newList];
    },
    [types.PLAY.mutations.RESET_EVERYTHING]: (state) => {
      state.playPhase = false;
      state.selectedCategories = [];
    },
  },
  actions: {
    [types.PLAY.actions.UPDATE_PLAY_PHASE]: ({ commit }, flag) => {
      commit("SET_PLAY_PHASE", flag);
    },
    [types.CATEGORIES.actions.UPDATE_SELECTED_CATEGORIES]: (
      { commit },
      item
    ) => {
      commit("SET_SELECTED_CATEGORIES", item);
    },
    [types.CATEGORIES.actions.DELETE_SELECTED_CATEGORY]: ({ commit }, item) => {
      commit(types.CATEGORIES.mutations.DELETE_SELECTED_CATEGORY, item);
    },
    [types.PLAY.actions.RESET_EVERYTHING]: ({ commit }) => {
      commit(types.PLAY.mutations.RESET_EVERYTHING);
    },
  },
  getters: {
    [types.PLAY.getters.GET_PLAY_PHASE]: (state) => state.playPhase,
    [types.CATEGORIES.getters.GET_SELECTED_CATEGORIES]: (state) =>
      state.selectedCategories,
  },
  modules: { game },
});
