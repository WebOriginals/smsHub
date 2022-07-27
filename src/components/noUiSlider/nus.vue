<template lang="pug">
#main
  label first
  input(v-model='first')
  label second
  input(v-model='second')
  label total
  textarea(v-model='total')
  #slider(ref='range')
  input(id='slider-input' v-model='third' v-on:change="updateSlider")
</template>

<script>
import '../../assets/js/libs/nouislider.js';
import '../../assets/js/libs/wNumb.min';

export default {
  name: "nus",
  data() {
    return {
      first: 3,
      second: 2,
      third: 40,
      slider: {
        min: 0,
        max: 100,
        start: 40,
        step: 1
      },
      Slider: document.getElementById('slider')

    }
  },
  computed: {
    total: function () {
      return parseInt(this.first) * parseInt(this.second) * parseInt(this.third)
    }
  },
  methods: {
    updateSlider: function () {
      this.$refs.range.noUiSlider.set(this.third)
    }
  },

  mounted() {
    noUiSlider.create(this.$refs.range, {
      start: this.slider.start,
      step: this.slider.step,
      range: {
        'min': this.slider.min,
        'max': this.slider.max
      }
    });
    this.$refs.range.noUiSlider.on('update', function( values, handle ) {
      this.third = values[handle];
      console.log(this.third)
    });
  }
}

</script>

<style lang="scss">
#main{
  display: grid;
  grid-gap: 40px;
}

</style>
