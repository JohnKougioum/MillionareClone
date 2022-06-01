import axios from "axios";
import types from "../constants";
export default {
  state: {
    progress: 0,
    question: "",
    answers: [],
    gameTimer: false,
    showQuestionTimer: false,
    showCorrectAnswerTimer: false,
  },
  mutations: {
    [types.GAME.SET_PROGRESS](state) {
      state.progress++;
    },
    [types.GAME.SET_QUESTION](state, question) {
      state.question = question;
    },
    [types.GAME.SET_ANSWERS](state, answer) {
      state.answers.push(answer);
    },
    [types.TIMER.SET_SHOW_CORRECT_ANSWER_TIMER](state, flag) {
      state.showCorrectAnswerTimer = flag;
    },
  },
  actions: {
    [types.GAME.UPDATE_PROGRESS]({ commit }) {
      commit("SET_PROGRESS");
    },
    async [types.GAME.FETCH_TRIVIA]({ commit }) {
      //check state.progress for the level of difficulty

      //   const categories = rootState.selectedCategories;

      //   let randomIndex = Math.floor(Math.random() * categories.length);

      const data = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount: 1,
          category: 15,
          difficulty: "easy",
          type: "multiple",
        },
      });

      const question = decode_html(data.data.results[0].question);

      commit("SET_QUESTION", question);

      populate_answers(commit, data.data.results[0]);
    },
    [types.TIMER.UPDATE_SHOW_CORRECT_ANSWER_TIMER]({ commit }, flag) {
      commit("SET_SHOW_CORRECT_ANSWER_TIMER", flag);
    },
  },
  getters: {
    [types.GAME.GET_PROGRESS]: (state) => state.progress,
    [types.GAME.GET_QUESTION]: (state) => state.question,
    [types.GAME.GET_ANSWERS]: (state) => state.answers,
    [types.TIMER.GET_SHOW_CORRECT_ANSWER_TIMER]: (state) =>
      state.showCorrectAnswerTimer,
  },
};

function decode_html(txt) {
  var temp = document.createElement("textarea");
  temp.innerHTML = txt;
  return temp.value;
}

function populate_answers(commit, data) {
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

    if (i === 4) clearInterval(delayedAnswers);
  }, 2000);
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
