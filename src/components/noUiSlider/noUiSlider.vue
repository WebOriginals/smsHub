<template lang="pug">
.body-range
  span.range__text Период работы:
  span#numericSliderResult(ref='SliderResult')
  #range.range(ref='range' @click="up")

</template>

<script>
import '../../assets/js/libs/nouislider.js';
import '../../assets/js/libs/wNumb.min'

export default {
  name: "noUiSlider",
  data() {
    return  {
      numericSliderResult: 2,
      min: 0,
      max: 36,
      start: 2,
      step: 1,
    }
  },

  methods: {
    up(){
      let stepSliderValueElement = document.getElementById('numericSliderResult');
      let range = 0;
      this.$refs.range.noUiSlider.on('update', function (values, handle) {
        range = Math.round(values[handle]);
        stepSliderValueElement.innerHTML = range;
      });
      //console.log('range' + range)
      this.numericSliderResult = range;
      //console.log(this.numericSliderResult)
      return this.$emit('sliser', this.numericSliderResult)
    }
  },
  mounted() {
    noUiSlider.create(this.$refs.range, {
      start: this.start,
      step: this.step,
      behaviour: 'lower',
      connect: [true, false],
      range: {
        'min': this.min,
        'max': this.max
      }
    });
    let stepSliderValueElement = document.getElementById('numericSliderResult');
    this.$refs.range.noUiSlider.on('update', function (values, handle) {
      stepSliderValueElement.innerHTML = Math.round(values[handle]);
    });
  }
}
</script>

<style scoped lang="scss">


</style>
