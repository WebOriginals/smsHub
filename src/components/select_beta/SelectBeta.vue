<template lang="pug">
div
  v-select.leng(:modelValue="selected"
    v-model="selected"
    :options="arrayForSelect"
    label="text"
    :searchable="false"
  )
    template(#selected-option="{ img, text }")
      .leng-title
        img(:src="img" style="max-width:38px")
        span(style="color:#fff")  {{ text }}
    template(#option="{ img, text }" )
      .oprion-row(style="display: flex; align-items: center; gap: 15px")
        img(:src="img" style="max-width:38px")
  .btn(@click="changePageTitle") hhhu

</template>

<script>
import vSelect from 'vue-select';

const Select = [
  {text: 'Russia', img: "public/assets/img/png/russia.png", value: 'ru'},
  {text: 'Usa', img: "public/assets/img/png/united-states.png", value: 'en'},
];

export default {
  name: "SelectBeta",
  components: {
    vSelect
  },
  data() {
    return {
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      selected: Select[0],
    }
  },
  emits: ['update:modelValue'],
  methods: {
    changePageTitle() {
      this.$emit('update:modelValue', this.selected.value)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
