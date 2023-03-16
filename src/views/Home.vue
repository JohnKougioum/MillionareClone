<template>
  <div class="h-full w-full overflow-hidden">
    <Background :isCategory="false" :addBlur="true" />
    <div
      class="w-full md:w-2/3 h-full relative left-1/2 transform -translate-x-1/2 z-10"
    >
      <div class="h-full w-full flex flex-col justify-evenly items-center">
        <div class="h-auto flex justify-center">
          <img
            class="md:h-96 select-none"
            src="../assets/better_logo.png"
            alt="HTML5"
          />
        </div>
        <div class="text-white text-3xl">
          <button
            @click="startPlayPhase"
            class="relative py-4 px-48 play__button"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Background from "../components/Background.vue";
export default {
  name: "Home",
  components: {
    Background,
  },
  methods: {
    startPlayPhase() {
      const flag = true;
      this.UPDATE_PLAY_PHASE(flag);
      this.$router.push({ name: "Category" });
    },
    ...mapActions(["UPDATE_PLAY_PHASE"]),
  },
};
</script>

<style scoped>
.play__button {
  background-color: #040444;
}
</style>
