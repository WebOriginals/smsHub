<template lang="pug">
.body-range
  span.range__text Период работы:
  span#numericSliderResult
  #range.range(ref='range')


</template>

<script>
import  '../../assets/js/libs/nouislider.js';
import  '../../assets/js/libs/wNumb.min'
export default {
  name: "noUiSlider",
  data() {
    return {
      dataSlider:{
        numericSliderResult: 2,
        min: 0,
        max: 31,
        start: 2,
        step: 1
      }
    }
  },
  computed: {},
  methods: {

  },
  mounted() {
    let stepSlider = document.getElementById('range');
    let stepSliderValueElement = document.getElementById('numericSliderResult');

    noUiSlider.create(stepSlider, {
      start: this.dataSlider.start,
      step: this.dataSlider.step,
      behaviour: 'lower',
      connect: [true, false],
      range: {
        'min': this.dataSlider.min,
        'max': this.dataSlider.max
      }
    });

    stepSlider.noUiSlider.on('update', function (values, handle) {
      stepSliderValueElement.innerHTML = Math.round(values[handle]);
    });
  }
}
</script>

<style scoped lang="scss">




</style>
