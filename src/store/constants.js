export default {
  PLAY: {
    mutations: {
      SET_PLAY_PHASE: "SET_PLAY_PHASE",
      RESET_EVERYTHING: "RESET_EVERYTHING",
    },
    actions: {
      UPDATE_PLAY_PHASE: "UPDATE_PLAY_PHASE",
      RESET_EVERYTHING: "RESET_EVERYTHING",
    },
    getters: {
      GET_PLAY_PHASE: "GET_PLAY_PHASE",
    },
  },
  CATEGORIES: {
    mutations: {
      SET_SELECTED_CATEGORIES: "SET_SELECTED_CATEGORIES",
      DELETE_SELECTED_CATEGORY: "DELETE_SELECTED_CATEGORY",
    },
    actions: {
      UPDATE_SELECTED_CATEGORIES: "UPDATE_SELECTED_CATEGORIES",
      DELETE_SELECTED_CATEGORY: "DELETE_SELECTED_CATEGORY",
    },
    getters: {
      GET_SELECTED_CATEGORIES: "GET_SELECTED_CATEGORIES",
    },
  },
  GAME: {
    mutations: {
      SET_QUESTION_PROGRESS: "SET_QUESTION_PROGRESS",
      SET_QUESTION: "SET_QUESTION",
      SET_ANSWERS: "SET_ANSWERS",
      EMPTY_TRIVIA_NEXT_ROUND: "EMPTY_TRIVIA_NEXT_ROUND",
      SET_TRIVIA_DATA: "SET_TRIVIA_DATA",
      SET_ROUND_RESULT: "SET_ROUND_RESULT",
      RESET_GAME: "RESET_GAME",
      SET_WON_MODAL_APPEAR: "SET_WON_MODAL_APPEAR",
    },
    actions: {
      FETCH_TRIVIA: "FETCH_TRIVIA",
      EMPTY_TRIVIA_NEXT_ROUND: "EMPTY_TRIVIA_NEXT_ROUND",
      START_NEXT_ROUND: "START_NEXT_ROUND",
      CHECK_ROUND_RESULT: "CHECK_ROUND_RESULT",
      RESET_GAME: "RESET_GAME",
    },
    getters: {
      GET_GAME_PROGRESS: "GET_GAME_PROGRESS",
      GET_QUESTION: "GET_QUESTION",
      GET_ANSWERS: "GET_ANSWERS",
      GET_ROUND_RESULTS: "GET_ROUND_RESULTS",
    },
  },
  TIMER: {
    mutations: {
      SET_SHOW_CORRECT_ANSWER_TIMER: "SET_SHOW_CORRECT_ANSWER_TIMER",
      SET_ENABLE_ANSWERS: "SET_ENABLE_ANSWERS",
    },
    actions: {
      UPDATE_SHOW_CORRECT_ANSWER_TIMER: "UPDATE_SHOW_CORRECT_ANSWER_TIMER",
      UPDATE_ENABLE_ANSWERS: "UPDATE_ENABLE_ANSWERS",
    },
    getters: {
      GET_SHOW_CORRECT_ANSWER_TIMER: "GET_SHOW_CORRECT_ANSWER_TIMER",
      GET_ENABLE_ANSWERS: "GET_ENABLE_ANSWERS",
    },
  },
};
