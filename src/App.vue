<script>
import Header from "./components/header/Header.vue";
import First from "./components/page/main/First.vue";
import HowItWorks from "./components/page/main/howItWorks.vue";
import Calculator from "./components/page/main/calculator.vue";
import MainIndicators from "./components/page/main/mainIndicators.vue";

export default {
  components: {
    MainIndicators,
    Calculator,
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
      <calculator></calculator>
      <main-indicators></main-indicators>
    </main>
  </div>
</template>

<style>


</style>
