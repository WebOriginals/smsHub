<template lang="pug">
.basicFigures
  .basicFigures__container
    h2.basicFigures__title <span>Основные</span> цифры
    .basicFigures__grid
      .basicFigures__itim
        span 1 500
        p подключено партнёров за 1 год
      .basicFigures__itim
        span 22 326
        p средний доход партнера за 1 месяц
      .basicFigures__itim
        span 3 000 000
        p Клиентов на сервисе Smshub
      .basicFigures__itim
        span 8 272 611
        p средний доход партнера за 1 год
    apexchart(type="area" height="350" :options="areaChart.chartOptions" :series="areaChart.series")

</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "mainIndicators",
  components:{
    apexchart: VueApexCharts,
  },
  data() {
    return {
      areaChart:{

        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          crosshairs: {
            show: true,
            width: 1,
            position: 'back',
            opacity: 0.9,
            stroke: {
              color: '#b6b6b6',
              width: 0,
              dashArray: 0,
            },
            fill: {
              type: 'solid',
              color: '#B1B9C4',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 1,
              opacity: 0.4,
            },
          },
        },

      },
    }
  },
}
</script>

<style  lang="scss">
@import '../../../assets/scss/style.scss';

.basicFigures{
  @include adaptiveValue(padding-top, 65, 30);
  @include adaptiveValue(padding-bottom, 65, 30);

  &__title{
    @include adaptiveValue(padding-bottom, 60, 60)
  }
  &__grid{
    display: grid;
    grid-gap: rem(22) rem(50);
    margin-bottom: rem(30);
    @include mq('tablet-wide') {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__itim{
    display: grid;
    justify-items: center;
    span{
      font-size: rem(42);
      font-weight: 700;
      margin-bottom: rem(5);
    }
    p{
      text-align: center;
      padding: 0 20px;
    }
  }
}
</style>
