<template>
  <div id="app">
    <!-- <div>
      
    </div> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  mounted: () => {
    console.log("app mounted");
  }
};
</script>

<style>
</style>
