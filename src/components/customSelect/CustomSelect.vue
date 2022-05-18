<template lang="pug">
select(:class="classNameSelect")
  option(v-for="option in selectLanguage" :data-asset="option.img") {{option.text }}


</template>

<script>
import {isMobile, _slideUp, _slideDown, _slideToggle} from "../../assets/js/files/functions.js";
import {SelectConstructor} from "../../assets/js/libs/select.js";
import {formsModules} from "../../assets/js/files/forms/forms.js";

export default {
  name: "CustomSelect",
  props:{
    selectLanguage: {
      type: Array,
      required: true,
    },
    classNameSelect:{}
  },
  data() {
    return {
      selectCustom: '',
    }
  },
  computed: {},
  mounted() {
    this.selectCustom = new SelectConstructor;
  }
}
</script>

<style scoped>

</style>
