<script>
import Header from "./components/header/Header.vue";
import First from "./components/page/main/First.vue";
import HowItWorks from "./components/page/main/howItWorks.vue";
import Calculator from "./components/page/main/calculator.vue";
import MainIndicators from "./components/page/main/mainIndicators.vue";
import ChartMap from "./components/page/main/ChartMap.vue";
import mainForm from "./components/page/main/mainForm.vue";
import ask from "./components/page/main/ask.vue";
import Footer from "./components/footer/footer.vue";
import Thanks from "./components/popups/Thanks.vue";
import Application from "./components/popups/Application.vue";
import vSelect from "vue-select";
import {bodyLockStatus, bodyLockToggle} from "./assets/js/files/functions";
import {DynamicAdapt} from "./assets/js/libs/dynamic_adapt";
export default {
  components: {
    Application,
    Thanks,
    Footer,
    ask,
    mainForm,
    ChartMap,
    MainIndicators,
    Calculator,
    HowItWorks,
    Header,
    First
  },

}
</script>

<template>
  <div class="wrapper lending">
    <Header></Header>
    <main class="page main" >
      <First></First>
      <how-it-works></how-it-works>
<!--      <calculator></calculator>-->
      <main-indicators></main-indicators>
      <ChartMap></ChartMap>
      <main-form></main-form>
      <ask></ask>
    </main>
    <Footer></Footer>
    <Thanks></Thanks>
    <Application></Application>
  </div>
</template>

<style>

</style>
