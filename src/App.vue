<template>
  <div class="wrapper">
    <div id="navigation">
      <Navigation />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: {Navigation}
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
}

</style>