<template>
  <div class="h-screen w-full overflow-hidden">
    <Background :isCategory="false" :addBlur="false" />
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
      <Sidebar />
    </div>
    <portal to="modals" v-if="showModal">
      <TheModal :show="showModal" @close="showModal = false">
        <template slot="text">
          <h1 v-if="!wonModal" class="text-xl">You Lost!</h1>
          <h1 v-else>Congratulations!!! You Won.</h1>
        </template>

        <template slot="footer">
          <button
            @click="gotoHome"
            class="absolute bottom-0 left-0 mb-1 ml-3 bg-yellow-400 rounded py-1 px-2"
          >
            Go to Home
          </button>
          <button
            @click="restartGame"
            class="absolute bottom-0 right-0 mb-1 mr-3 bg-indigo-900 text-white rounded py-1 px-2"
          >
            Play Again
          </button>
        </template>
      </TheModal>
    </portal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Answer from "../components/Answer.vue";
import Sidebar from "../components/Sidebar.vue";
import Background from "../components/Background.vue";
import TheModal from "../components/TheModal.vue";

export default {
  name: "Play",
  components: {
    Answer,
    Sidebar,
    Background,
    TheModal,
  },
  data() {
    return {
      abcd: ["A:", "B:", "C:", "D:"],
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      gameProgress: (state) => state.game.gameProgress,
      wonModal: (state) => state.game.showWonModal,
    }),
    ...mapGetters(["GET_QUESTION", "GET_ANSWERS", "GET_ROUND_RESULTS"]),
    roundResults() {
      return this.GET_ROUND_RESULTS;
    },
  },
  watch: {
    roundResults(newValue) {
      setTimeout(() => {
        this.showModal = !newValue;
      }, 2500);
    },
  },
  created() {
    this.FETCH_TRIVIA();
  },
  methods: {
    ...mapActions(["FETCH_TRIVIA", "RESET_GAME", "RESET_EVERYTHING"]),
    gotoHome() {
      this.resetGame();
      this.$router.push({ name: "Home" });
    },
    restartGame() {
      this.resetGame();
      this.$router.push({ name: "Category" });
    },
    resetGame() {
      this.showModal = false;
      this.RESET_GAME();
      this.RESET_EVERYTHING();
    },
  },
};
</script>

<style></style>
