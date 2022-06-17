<template>
  <img
    class="w-full custom__height z-0 absolute select-none"
    :class="[isCategory ? 'image__height' : '', addBlur ? 'image__blur' : '']"
    src="../assets/stage.jpg"
    alt="HTML5"
  />
</template>

<script>
export default {
  name: "Background",
  props: ["isCategory", "addBlur"],
};
</script>

<style>
.custom__height {
  height: 100vh;
  object-fit: cover;
}

.image__blur {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}
.image__height {
  height: 100%;
}

@media screen and (max-width: 767px) {
  .image__height {
    height: 2200px;
  }
}
</style>
