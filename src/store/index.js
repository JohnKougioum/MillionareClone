import Vue from "vue";
import Vuex from "vuex";
import {
  SET_PLAY_PHASE,
  UPDATE_PLAY_PHASE,
  GET_PLAY_PHASE,
  SET_SELECTED_CATEGORIES,
  UPDATE_SELECTED_CATEGORIES,
  DELETE_SELECTED_CATEGORY,
  GET_SELECTED_CATEGORIES,
} from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playPhase: true,
    selectedCategories: [],
  },
  mutations: {
    [SET_PLAY_PHASE]: (state, flag) => (state.playPhase = flag),
    [SET_SELECTED_CATEGORIES]: (state, item) =>
      state.selectedCategories.push(item),
    [DELETE_SELECTED_CATEGORY]: (state, item) => {
      const newList = state.selectedCategories.filter((el) => el !== item);
      state.selectedCategories = [...newList];
    },
  },
  actions: {
    [UPDATE_PLAY_PHASE]: ({ commit }, flag) => {
      commit("SET_PLAY_PHASE", flag);
    },
    [UPDATE_SELECTED_CATEGORIES]: ({ commit }, item) => {
      commit("SET_SELECTED_CATEGORIES", item);
    },
    [DELETE_SELECTED_CATEGORY]: ({ commit }, item) => {
      commit("DELETE_SELECTED_CATEGORY", item);
    },
  },
  getters: {
    [GET_PLAY_PHASE]: (state) => state.playPhase,
    [GET_SELECTED_CATEGORIES]: (state) => state.selectedCategories,
  },
  modules: {},
});
