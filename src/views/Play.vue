<template>
  <div class="h-screen w-full overflow-hidden">
    <img
      class="w-full h-full z-0 absolute select-none"
      src="../assets/stage.jpg"
      alt="HTML5"
    />
    <div class="h-screen w-full z-10 flex justify-center items-end">
      <div class="relative h-2/4 md:h-2/5 mb-10 w-full text-white">
        <div class="h-full w-full flex flex-col items-center">
          <div
            class="w-full md:w-2/3 bg-black bg-opacity-75 h-auto py-1 md:py-6 rounded-xl flex items-center justify-center"
          >
            <h1 class="text-xl md:text-2xl">
              {{ GET_QUESTION ? GET_QUESTION : "" }}
            </h1>
          </div>
          <div class="w-full md:w-2/3 grid grid-cols-2 gap-2 pt-4 md:pt-10">
            <Answer
              v-for="(letter, index) in this.abcd"
              :key="index"
              :letter="letter"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Answer from "../components/Answer.vue";
export default {
  name: "Play",
  components: {
    Answer,
  },
  data() {
    return {
      abcd: ["A:", "B:", "C:", "D:"],
    };
  },
  computed: {
    ...mapGetters(["GET_QUESTION", "GET_ANSWERS"]),
  },
  created() {
    this.FETCH_TRIVIA();
  },
  methods: {
    ...mapActions(["FETCH_TRIVIA"]),
  },
};
</script>

<style></style>
