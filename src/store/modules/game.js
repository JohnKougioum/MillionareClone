import axios from "axios";
import types from "../constants";
export default {
  state: {
    gameProgress: 12,
    questionProgress: 0,
    triviaData: [],
    question: "",
    answers: [],
    // gameTimer: false,
    // showQuestionTimer: false,
    showCorrectAnswerTimer: false,
    enableAnswers: false,
    roundResults: true,
  },
  mutations: {
    [types.GAME.mutations.SET_QUESTION_PROGRESS](state) {
      state.questionProgress;
    },
    [types.GAME.mutations.SET_QUESTION](state, question) {
      state.question = question;
    },
    [types.GAME.mutations.SET_ANSWERS](state, answer) {
      state.answers.push(answer);
    },
    [types.TIMER.mutations.SET_SHOW_CORRECT_ANSWER_TIMER](state, flag) {
      state.showCorrectAnswerTimer = flag;
    },
    [types.TIMER.mutations.SET_ENABLE_ANSWERS](state, flag) {
      state.enableAnswers = flag;
    },
    [types.GAME.mutations.EMPTY_TRIVIA_NEXT_ROUND](state) {
      state.gameProgress++;
      state.questionProgress++;
      state.question = "";
      state.answers = [];
      state.enableAnswers = false;
      state.showCorrectAnswerTimer = false;
      if (state.gameProgress === 7 || state.gameProgress === 12)
        state.questionProgress = 0;

      this.dispatch(types.GAME.actions.START_NEXT_ROUND);
    },
    [types.GAME.mutations.SET_TRIVIA_DATA](state, triData) {
      state.triviaData.push(triData);
    },
    [types.GAME.mutations.SET_ROUND_RESULT](state, flag) {
      console.log("flag = ", flag);
      state.roundResults = flag;
      console.log(state.roundResults);
    },
    [types.GAME.mutations.RESET_GAME](state) {
      state.gameProgress = 0;
      state.questionProgress = 0;
      state.triviaData = [];
      state.question = "";
      state.answers = [];
      state.enableAnswers = false;
      state.showCorrectAnswerTimer = false;
      state.roundResults = true;
    },
  },
  actions: {
    async [types.GAME.actions.FETCH_TRIVIA]({ commit, dispatch }) {
      //   const categories = rootState.selectedCategories;

      //   let randomIndex = Math.floor(Math.random() * categories.length);

      // categories[randomIndex]

      const easyData = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount: 7,
          category: 15,
          difficulty: "easy",
          type: "multiple",
        },
      });

      commit(types.GAME.mutations.SET_TRIVIA_DATA, easyData.data.results);

      const mediumData = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount: 5,
          category: 15,
          difficulty: "medium",
          type: "multiple",
        },
      });

      commit(types.GAME.mutations.SET_TRIVIA_DATA, mediumData.data.results);

      const hardData = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount: 3,
          category: 15,
          difficulty: "hard",
          type: "multiple",
        },
      });

      commit(types.GAME.mutations.SET_TRIVIA_DATA, hardData.data.results);

      dispatch(types.GAME.actions.START_NEXT_ROUND);
    },
    [types.TIMER.actions.UPDATE_SHOW_CORRECT_ANSWER_TIMER]({ commit }, flag) {
      commit(types.TIMER.mutations.SET_SHOW_CORRECT_ANSWER_TIMER, flag);
    },
    [types.TIMER.actions.UPDATE_ENABLE_ANSWERS]({ commit }, flag = false) {
      commit(types.TIMER.mutations.SET_ENABLE_ANSWERS, flag);
    },
    [types.GAME.actions.EMPTY_TRIVIA_NEXT_ROUND]({ commit }) {
      commit(types.GAME.mutations.EMPTY_TRIVIA_NEXT_ROUND);
    },
    [types.GAME.actions.START_NEXT_ROUND]({ commit, dispatch, state }) {
      console.log(state.gameProgress);
      if (state.gameProgress === 15) {
        return;
      }

      let index = 0;

      if (state.gameProgress >= 7) index = 1;
      if (state.gameProgress >= 12) index = 2;
      console.log(
        state.triviaData[index][state.questionProgress].correct_answer
      );

      const question = decode_html(
        state.triviaData[index][state.questionProgress].question
      );
      commit(types.GAME.mutations.SET_QUESTION, question);

      populate_answers(
        commit,
        dispatch,
        state.triviaData[index][state.questionProgress]
      );
    },
    [types.GAME.actions.CHECK_ROUND_RESULT]({ commit, state }, guessIndex) {
      let flag = state.answers[guessIndex].correct;

      console.log(state.gameProgress);
      if (state.gameProgress === 15) flag = false;
      commit(types.GAME.mutations.SET_ROUND_RESULT, flag);
    },
    [types.GAME.actions.RESET_GAME]({ commit }) {
      commit(types.GAME.mutations.RESET_GAME);
    },
  },
  getters: {
    [types.GAME.getters.GET_GAME_PROGRESS]: (state) => state.gameProgress,
    [types.GAME.getters.GET_QUESTION]: (state) => state.question,
    [types.GAME.getters.GET_ANSWERS]: (state) => state.answers,
    [types.GAME.getters.GET_ROUND_RESULTS]: (state) => state.roundResults,
    [types.TIMER.getters.GET_SHOW_CORRECT_ANSWER_TIMER]: (state) =>
      state.showCorrectAnswerTimer,
    [types.TIMER.getters.GET_ENABLE_ANSWERS]: (state) => state.enableAnswers,
  },
};

function decode_html(txt) {
  var temp = document.createElement("textarea");
  temp.innerHTML = txt;
  return temp.value;
}

function populate_answers(commit, dispatch, data) {
  let answersArray = [];
  let tempAnswer = {
    answer: decode_html(data.correct_answer),
    correct: true,
  };

  answersArray.push(tempAnswer);

  data.incorrect_answers.forEach((element) => {
    tempAnswer = { answer: decode_html(element), correct: false };
    answersArray.push(tempAnswer);
  });

  let shuffleArray = shuffle(answersArray);
  let i = 0;
  let delayedAnswers = setInterval(() => {
    let answer = shuffleArray[i];
    commit("SET_ANSWERS", answer);
    i++;

    if (i === 4) {
      let flag = true;
      dispatch(types.TIMER.actions.UPDATE_ENABLE_ANSWERS, flag);
      clearInterval(delayedAnswers);
    }
  }, 200);
}

function shuffle(array) {
  var i = array.length,
    k,
    temp;

  while (--i > -1) {
    k = Math.floor(Math.random() * (i + 1));
    temp = array[k];
    array[k] = array[i];
    array[i] = temp;
  }

  return array;
}
