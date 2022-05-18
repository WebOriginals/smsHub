<script>
import Header from "./components/header/Header.vue";
import First from "./components/page/main/First.vue";
import HowItWorks from "./components/page/main/howItWorks.vue";

export default {
  components: {
    HowItWorks,
    Header,
    First
  }
}
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <main class="page main">
      <First></First>
      <how-it-works></how-it-works>
    </main>
  </div>
</template>

<style>


</style>
