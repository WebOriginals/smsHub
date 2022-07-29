<template lang="pug">
.body-range
  span.range__text Период работы:
  span#numericSliderResult {{ this.numericSliderResult }}
  #range.range(ref='range')

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
      start: 6,
      step: 1,
    }
  },

  methods: {
    initSlider(){
      noUiSlider.create(this.$refs.range, {
        start: this.start,
        step: this.step,
        behaviour: 'tap',
        connect: [true, false],
        range: {
          'min': this.min,
          'max': this.max
        }
      });
      let self = this
      this.$refs.range.noUiSlider.on("update", function (values, handle) {
        self.numericSliderResult = Math.round(values[handle]);
        self.$emit('slider', self.numericSliderResult)
      })
    },



  },
  mounted() {
    this.initSlider()
  }
}
</script>

<style scoped lang="scss">


</style>
