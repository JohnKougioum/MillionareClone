<template>
  <div
    class="fixed right-0 h-screen text-white z-20 img_bg duration-700"
    :class="toggle ? 'md:w-4/12 w-2/3' : 'w-0'"
  >
    <div
      class="relative -left-12 top-1/5 md:top-1/3 w-12 h-16 img_bg rounded-tl-full rounded-tr-none rounded-br-none rounded-bl-full flex justify-center items-center cursor-pointer"
      @click="toggleSidebar"
    >
      <svg
        v-show="!toggle"
        fill="white"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"
        />
      </svg>
      <svg
        v-show="toggle"
        fill="white"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
        />
      </svg>
    </div>
    <div class="flex flex-col items-start h-5/6 justify-end px-10 mt-6">
      <SidebarItem
        v-for="(clientProgress, index) in clientProgressArrayReversed"
        :key="index"
        :clientProgress="clientProgress"
      />
    </div>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  data() {
    return {
      toggle: true,
      clientProgressArray: [
        {
          number: 1,
          money: 100,
        },
        {
          number: 2,
          money: 200,
        },
        {
          number: 3,
          money: 300,
        },
        {
          number: 4,
          money: 500,
        },
        {
          number: 5,
          money: 1000,
        },
        {
          number: 6,
          money: 2000,
        },
        {
          number: 7,
          money: 4000,
        },
        {
          number: 8,
          money: 8000,
        },
        {
          number: 9,
          money: 16000,
        },
        {
          number: 10,
          money: 32000,
        },
        {
          number: 11,
          money: 64000,
        },
        {
          number: 12,
          money: 125000,
        },
        {
          number: 13,
          money: 250000,
        },
        {
          number: 14,
          money: 500000,
        },
        {
          number: 15,
          money: 1000000,
        },
      ],
    };
  },
  computed: {
    clientProgressArrayReversed() {
      return [...this.clientProgressArray].reverse();
    },
  },
  methods: {
    toggleSidebar() {
      console.log("asd");
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style>
.img_bg {
  background: rgb(3, 0, 52);
  background: linear-gradient(
    90deg,
    rgba(3, 0, 52, 1) 0%,
    rgba(54, 9, 196, 1) 100%
  );
}
</style>
