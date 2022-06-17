<template>
  <div
    @click="pickCategory"
    class="text-white relative z-10 my-5 w-5/6 h-20 rounded bg-gray-400 hover:bg-gray-500 cursor-pointer flex justify-center items-center"
    :class="selected ? 'bg-indigo-900 hover:bg-indigo-700' : ''"
  >
    <div class="text-xl">{{ category.category }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CategoryItem",
  props: {
    category: Object,
  },
  computed: {
    ...mapGetters(["GET_SELECTED_CATEGORIES"]),
    selected() {
      if (this.GET_SELECTED_CATEGORIES.includes(this.category.categoryId))
        return true;
      else return false;
    },
  },
  methods: {
    pickCategory() {
      const item = this.category.categoryId;
      if (this.selected) {
        this.DELETE_SELECTED_CATEGORY(item);
        return;
      }

      this.UPDATE_SELECTED_CATEGORIES(item);
    },
    ...mapActions(["UPDATE_SELECTED_CATEGORIES", "DELETE_SELECTED_CATEGORY"]),
  },
};
</script>

<style></style>
