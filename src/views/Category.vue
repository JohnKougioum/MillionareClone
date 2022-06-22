<template>
  <div class="h-screen w-full overflow-hidden">
    <Background :isCategory="true" :addBlur="true" />

    <div
      class="absolute h-auto w-full md:top-1/2 transform md:-translate-y-1/2 py-6 md:py-0"
    >
      <div class="font-black leading-5 w-auto flex justify-start">
        <div class="bg-black bg-opacity-40 rounded p-4">
          <h1 class="text-5xl text-yellow-400 text-opacity-80 select-none">
            CHOOSE YOUR CATEGORIES
          </h1>
        </div>
      </div>
      <div
        class="grid grid-flow-row auto-rows-[minmax(0,_2fr)] md:grid md:grid-cols-4 md:gap-1 pl-14 md:pl-10"
      >
        <CategoryItem
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </div>
      <div class="flex justify-start items-center mt-6">
        <button
          @click="startGame"
          class="text-white text-2xl bg-indigo-900 hover:bg-yellow-400 h-16 w-48"
        >
          Next
        </button>
      </div>
    </div>
    <portal to="modals" v-if="showModal">
      <TheModal :show="showModal">
        <h1 slot="text" class="text-xl">
          You need to pick at least 1 category!!
        </h1>

        <template slot="footer">
          <button
            @click="closeModal"
            class="absolute bottom-0 right-0 mb-1 mr-3 bg-yellow-400 rounded py-1 px-2"
          >
            OK
          </button>
        </template>
      </TheModal>
    </portal>
  </div>
</template>

<script>
import categoriesList from "../categories.json";
import CategoryItem from "../components/CategoryItem.vue";
import TheModal from "../components/TheModal.vue";
import Background from "../components/Background.vue";
import { mapGetters } from "vuex";
export default {
  name: "Category",
  components: {
    CategoryItem,
    TheModal,
    Background,
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
      this.$router.push({ name: "Play" });
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style></style>
