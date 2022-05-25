<template>
  <div
    class="h-screen w-full z-20 bg-black absolute top-0 left-0 bg-opacity-70"
  >
    <div
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-y-1/2 -translate-x-1/2
        w-2/5
        h-28
        bg-white
        rounded
        flex
        justify-center
        items-center
      "
    >
      <h1 class="text-xl">You need to pick at least 1 category!!</h1>
      <button
        @click="$emit('close')"
        class="
          absolute
          bottom-0
          right-0
          mb-1
          mr-3
          bg-yellow-400
          rounded
          py-1
          px-2
        "
      >
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModal",
};
</script>

<style>
</style>