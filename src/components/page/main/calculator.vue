<template lang="pug">
section.calculator#calculator(ref="calculator")
  .calculator__container
    h2.calculator__title Калькулятор <span>дохода</span>
    .calculator__content
      .calculator__h2 Узнай свой доход за пару кликов
      p.calculator__p Укажите страну и стоимость сим карты. Дальше мы всё сделаем за Вас Меняй период и наблюдай как растёт доход

      form
        p.calculator__p-green Страна
        v-select.selectCountry(v-model="selected" :options="arrayForSelect" label="text" )
        input.input.calculator__input(placeholder="Стоимость sim-карты" type="number" v-model="simPrice")
        label.calculator__label Средняя стоимость: 24руб
        p.calculator__p-green.mt-15 Количество замен
        v-select.selectCountry(v-model="selected2" :options="arrayForSelect2" label="text" )
        no-ui-slider(@sliser="tt")


        button.button-g Рассчитать
    .calculator__chart.chart
      .chart__title Результаты
      .chart__body
        apexchart(type="radialBar" height="362" :options="RadialbarsChart.chartOptions" :series="RadialbarsChart.series")
      ul.chart__list
        li
          .point(style="background: #64AF59")
          span Небходимое кол-во sim-карт:
          span {{ this.selected2.value.toLocaleString('ru-RU') }} шт.
        li
          .point(style="background: #F7C401")
          span Чистая прибыть одной sim-карты за {{this.sliderValue}} месяцев:
          span {{ profitOneSim }}
        li
          .point(style="background: #98E5FB")
          span Окупаемость оборудования:
          span {{ payback }} мес.
        li
          .point(style="background: #9265BE")
          span Доход за {{this.sliderValue}} месяцев:
          span  {{ profitPeriod.toLocaleString('ru-RU') }} ₽
        li
          .point(style="background: #444B8C")
          span Чистая прибыль за {{this.sliderValue}} месяцев:
          span {{ netIncome.toLocaleString('ru-RU') }} ₽


</template>

<script>
import NoUiSlider from "../../noUiSlider/noUiSlider.vue";
import VueApexCharts from "vue3-apexcharts";
import vSelect from 'vue-select';


const Select = [
  {text: 'Russia', value: 'ru'},
  {text: 'Usa', value: 'en'},
  {text: 'canada', value: 'can'},
];

const numberReplacements = [
  {text: '1 раз в дня', value: '992'},
  {text: '1 раз в два дня', value: '496'},
  {text: '1 раз в три дня', value: '331'},
];

export default {
  name: "calculator",
  components: {
    vSelect,
    NoUiSlider,
    apexchart: VueApexCharts,

  },
  data() {
    return {
      //Пропс class для селекта
      classNameSelect: 'country',
      //Пропс стран для селекта
      arrayForSelect: Select,
      //Selected для селекта
      selected: Select[0],

      //Пропс стран для селекта
      arrayForSelect2: numberReplacements,
      //Selected для селекта
      selected2: numberReplacements[1],

      //Настройки графика. Инструкцию настроек смотри https://apexcharts.com/docs/options/#
      RadialbarsChart: {
        series: [90, 80, 60, 50, 45],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          colors: ['#444B8C','#9265BE','#98E5FB','#F7C401','#64AF59'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',

                },
                value: {
                  fontSize: '36px',
                  color: '#64AF59',
                  fontWeight: 500,
                  offsetY: 30,
                },
                total: {
                  show: true,
                  label: 'Ваша выгода',
                  color: '#fff',
                  fontSize: '16px',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 500,
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249 + '%'
                  }
                }
              }
            }
          },
          labels: ['Ч.П. 19 М', 'Д 19 М', 'О.О', 'Ч.П. 1 Sim', 'Н.К. Sim'],
        },
      },
      simPrice: "40",
      sliderValue: 5,
    }
  },

  methods:{
    tt(event){
      console.log('event');
      console.log(event)
    }
  },

  computed:{

    // примерная стоимость всех сим (колличество * цену за 1шт)
    priceAllSim() {
      return this.selected2.value * this.simPrice
    },

    //чистая прибыль 1 сим  за выбранный период (ццена за сим * (средний чек = 80р) * период
    profitOneSim() {
      return this.simPrice * 80 * this.sliderValue
    },

    // затраты (стоимость всех сим + модем + пк + интернет + электроэнергия)
    expenses(){
      return this.priceAllSim + 30000 + 10000 + 1000 + 4000
    },

    //прибыль (общее кол-во сим * (средний чек = 80р) - примерная стоимость всех сим
    profit(){
      return this.selected2.value * 80 - this.priceAllSim
    },

    //окупаемость (затраты / прибыль и округленные в большую сторону)
    payback() {
      return  Math.ceil(this.expenses / this.profit)
    },

    //доход за период ( прибыль * период)
    profitPeriod() {
      return this.profit * this.sliderValue
    },

    // чистая прибыль за период ( доход за период - затраты )
    netIncome(){
      return this.profitPeriod - this.expenses
    }
  }
}
</script>

<style  lang="scss">
@import '../../../assets/scss/style.scss';

.lending .calculator {
  @include adaptiveValue(margin-top, 50, 30);
  @include adaptiveValue(padding-top, 50, 150);
  @include adaptiveValue(padding-bottom, 165, 50);
  @include adaptiveValue(margin-bottom, 65, 30);
  position: relative;
  background: url("../../../../public/assets/img/svg/bg-chart2-spa-none.svg") no-repeat center / cover;

  @include maq('tablet') {
    background: url("../../../../public/assets/img/svg/bg-chart2.svg") no-repeat center / cover;
  }
  &__container {
    display: grid;
    grid-gap: rem(100);

    @include mq('tablet') {
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(60);
      //align-items: center;
    }
    @include mq('desktop') {
      grid-gap: rem(160);
    }
  }

  &__title {
    @include mq('tablet') {
      grid-column: span 2;
      transform: translateY(-50px);
    }
  }

  &__content {
    color: $color_1;
  }

  &__h2 {
    @include adaptiveValue(font-size, 20, 18);
    @include adaptiveValue(margin-bottom, 20, 18);
    font-weight: 700;
  }

  &__p {
    margin-bottom: rem(44);
  }

  &__p-green {
    color: $color_4;
    font-weight: 600;
    @include adaptiveValue(font-size, 14, 14);
    margin-bottom: rem(10);

    &.mt-15{
      margin-top: 15px;
    }
  }

  &__input{
    width: 100%;
    margin-top: rem(20);
    &::placeholder{
      color: #989898;
    }
  }

  &__label{
    font-size: rem(14);
    font-style: italic;
    color: #989898;
  }

  .body-range{
    margin-top: rem(20);
  }

  .range__text{
    margin-right: rem(10);
    color: $color_4;
    font-weight: 600;
  }

  .range{
    margin-top: rem(30);
  }

  .chart__title{
    color: $color_4;
    @include adaptiveValue(font-size, 20, 20);
    font-weight: 700;
    margin-bottom: rem(44);
    text-align: center;
    text-transform: uppercase;
  }

  .chart__list{
    display: grid;
    grid-gap: rem(20);
    li{
      display: grid;
      grid-gap: rem(10);
      grid-template-columns: 15px 2fr 1fr;
      align-items: center;
    }
    .point{
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
    span{
      color: $color_1;
      &:last-child{
        margin-left: auto;
      }
    }

  }

  .apexcharts-datalabels-group{
    height: 100px !important;
    position: relative;
    display: block;

    #SvgjsText2020{
      y: 130;
    }
  }

  .selectCountry .vs__search::placeholder,
  .selectCountry .vs__dropdown-toggle,
  .selectCountry .vs__dropdown-menu {
    background: $color_1;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .selectCountry .vs__clear,
  .selectCountry .vs__open-indicator {
    fill: #394066;
  }

  .selectCountry {
    .vs__dropdown-toggle {
      height: rem(56);
    }
    .vs__selected{
      padding-left: rem(20);
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
