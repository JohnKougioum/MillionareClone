<template>
  <transition name="fade">
    <div class="fixed h-screen w-full z-20 bg-black top-0 left-0 bg-opacity-70">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto h-auto md:w-2/5 md:h-1/3 px-24 py-10 bg-white rounded flex justify-center items-center"
      >
        <div class="mb-4">
          <slot name="text"></slot>
        </div>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheModal",
  props: ["show"],
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        }
      },
    },
  },
  beforeDestroy() {
    document.body.style.removeProperty("overflow");
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
