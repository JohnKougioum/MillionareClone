<template>
  <div id="app">
    <router-view />
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: "Roboto Flex", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
