<template>
  <div class="h-screen w-full overflow-hidden">
    <img
      class="w-full h-full z-0 absolute image__blur"
      src="../assets/stage.jpg"
      alt="HTML5"
    />

    <div class="relative h-auto w-full top-1/2 transform -translate-y-1/2">
      <div class="font-black leading-5 w-auto flex justify-start">
        <div class="bg-black bg-opacity-40 rounded p-4">
          <h1 class="text-5xl text-yellow-400 text-opacity-80 select-none">
            CHOOSE YOUR CATEGORIES
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-0 px-24">
        <CategoryItem
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </div>
      <div class="flex justify-start items-center mt-6">
        <button
          @click="startGame"
          class="
            text-white text-2xl
            bg-indigo-900
            hover:bg-yellow-400
            h-16
            w-48
          "
        >
          Next
        </button>
      </div>
    </div>
    <transition name="fade">
      <TheModal v-if="showModal" @close="closeModal" />
    </transition>
  </div>
</template>

<script>
import categoriesList from "../categories.json";
import CategoryItem from "../components/CategoryItem.vue";
import TheModal from "../components/TheModal.vue";
import { mapGetters } from "vuex";
export default {
  name: "Category",
  components: {
    CategoryItem,
    TheModal,
  },
  data() {
    return {
      categories: categoriesList,
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["GET_SELECTED_CATEGORIES"]),
  },
  methods: {
    startGame() {
      if (this.GET_SELECTED_CATEGORIES.length === 0) {
        this.showModal = true;
        return;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
.image__blur {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}

.fade-enter-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>