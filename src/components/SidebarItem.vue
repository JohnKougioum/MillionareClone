<template>
  <div
    class="grid grid-row-1 grid-flow-col gap-4 py-2 px-2"
    :class="currectProgress ? 'bg-green-500' : ''"
  >
    <div class="w-10">
      <h1
        class="text-2xl font-bold"
        :class="assignColor ? 'text-white' : 'text-yellow-500'"
      >
        {{ clientProgress.number }}
      </h1>
    </div>
    <div class="diamond">
      <div
        v-if="clientProgress.number <= GET_GAME_PROGRESS + 1"
        class="w-2 h-2 relative bg-white rotate-45 transform top-1/2 -translate-y-1/2"
      ></div>
    </div>
    <div class="flex flex-row">
      <span class="text-2xl pl-2">€</span>
      <h1
        class="text-2xl font-bold pl-4"
        :class="[assignColor ? 'text-white' : 'text-yellow-500']"
      >
        {{
          clientProgress.money.toLocaleString("el-GR", {
            style: "currency",
            currency: "EUR",
          })
        }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SidebarItem",
  props: {
    clientProgress: Object,
  },
  computed: {
    assignColor() {
      if (this.clientProgress.number % 5 === 0) return true;
      else return false;
    },
    currectProgress() {
      if (this.GET_GAME_PROGRESS + 1 === this.clientProgress.number)
        return true;
      else return false;
    },
    ...mapGetters(["GET_GAME_PROGRESS"]),
  },
};
</script>

<style></style>
