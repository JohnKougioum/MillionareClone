<template>
  <div
    @click="takeAGuess"
    class="bg-black bg-opacity-75 h-16 flex items-center justify-start md:pl-10 cursor-pointer"
    :class="[
      correctAnswer ? 'bg-green-600 bg-opacity-100' : '',
      this.guessColor ? 'bg-yellow-400 bg-opacity-100' : '',
    ]"
  >
    <h1
      class="pl-2 md:pl-0 text-sm md:text-xl text-yellow-500"
      :class="this.guessColor ? 'text-black' : ''"
    >
      {{ letter }}
      <span
        class="text-white md:pl-4"
        :class="this.guessColor ? 'text-black' : ''"
        >{{ GET_ANSWERS[index] ? GET_ANSWERS[index].answer : "" }}</span
      >
    </h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Answer",
  props: {
    letter: String,
    index: Number,
  },
  data() {
    return {
      guessColor: false,
    };
  },
  computed: {
    correctAnswer() {
      if (
        this.GET_SHOW_CORRECT_ANSWER_TIMER &&
        this.GET_ANSWERS[this.index].correct
      ) {
        return true;
      }
      return false;
    },
    ...mapGetters(["GET_ANSWERS", "GET_SHOW_CORRECT_ANSWER_TIMER"]),
  },
  methods: {
    takeAGuess() {
      this.guessColor = true;
      setTimeout(() => {
        let flag = true;
        this.UPDATE_SHOW_CORRECT_ANSWER_TIMER(flag);
      }, 2000);
    },
    ...mapActions(["UPDATE_SHOW_CORRECT_ANSWER_TIMER"]),
  },
};
</script>

<style></style>
