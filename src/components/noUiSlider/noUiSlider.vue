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
    return {
      numericSliderResult: 2,
      min: 0,
      max: 36,
      start: 2,
      step: 1
    }
  },

  computed: {
    up(){
      let stepSliderValueElement = document.getElementById('numericSliderResult');
      this.$refs.range.noUiSlider.on('update', function (values, handle) {
        this.numericSliderResult = Math.round(values[handle]);
        stepSliderValueElement.innerHTML = this.numericSliderResult;
        console.log(this.numericSliderResult)
      });
    }
  },
  mounted() {

    let stepSliderValueElement = document.getElementById('numericSliderResult');
    let period = '';

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

    // this.$refs.range.noUiSlider.on('update', function (values, handle) {
    //     this.numericSliderResult = Math.round(values[handle]);
    //   stepSliderValueElement.innerHTML = this.numericSliderResult;
    //   // console.log(this.numericSliderResult)
    // });
  }
}
</script>

<style scoped lang="scss">


</style>
