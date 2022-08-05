<script>
import Header from "./components/header/Header.vue";
import First from "./components/page/main/First.vue";
import HowItWorks from "./components/page/main/howItWorks.vue";
import Calculator2 from "./components/page/main/calculator2.vue";
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
    Calculator2,
    HowItWorks,
    Header,
    First
  },
  data() {
    return {
      len: 'en'
    }
  },
  methods: {
    tt(post){
      return this.len = post
    }
  }
}
</script>

<template lang="pug">
.wrapper.lending
  Header(@lan="tt")
  main.page.main
    First
    how-it-works
    calculator2(:language="this.len")
    main-indicators
    ChartMap
    main-form
    ask
  main
  Footer
  Thanks
  Application
</template>

<style>

</style>
