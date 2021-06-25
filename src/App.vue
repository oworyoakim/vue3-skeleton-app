<template>
  <div id="navigation">
    <Navigation />
  </div>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<style>


</style>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: {Navigation}
}
</script>