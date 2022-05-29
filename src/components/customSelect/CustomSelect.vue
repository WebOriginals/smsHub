<template lang="pug">
select(:class="classNameSelect" ref='classNameSelect' v-model="selected")
  option( v-for="element in arrayForSelect" :data-asset="element.img" :key="element.value" :value="element.value") {{element.text}}
</template>

<script>
import {SelectConstructor} from "../../assets/js/libs/select.js";

export default {
  name: "CustomSelect",
  props:{
    arrayForSelect: {
      type: Array,
      required: true,
    },
    classNameSelect:{},
    selectSelected: {}
  },

  data() {
    return {
      selectCustom : '',
      selected: this.selectSelected,
    }
  },
  computed: {

  },
  methods:{  },
  mounted() {
      this.selectCustom = new SelectConstructor;
      this.selectCustom.selectsInit(this.$refs.classNameSelect);
  }
}
</script>

<style scoped>

</style>
