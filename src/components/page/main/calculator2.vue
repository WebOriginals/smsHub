<template lang="pug">
section.calculator#calculator(ref="calculator")
  .calculator__container
    h2.calculator__title(v-html="$t('calculator.title')")
    .calculator__content
      .calculator__h2(v-html="$t('calculator.subTitle')")
      p.calculator__p(v-html="$t('calculator.description')")

      form.calculator__form
        .form-wrapper
          p.calculator__p-green(v-if="$i18next.resolvedLanguage === 'ru'") Страна
          p.calculator__p-green(v-else) A country
          v-select.selectCountry(v-model="selectedCountry" :options="arrayForSelectCountry" label="text" )
        .form-wrapper
          p.calculator__p-green(v-if="$i18next.resolvedLanguage === 'ru'") Стоимость sim-карты
          p.calculator__p-green(v-else) SIM card cost
          input.input.calculator__input(placeholder="Стоимость sim-карты" type="number" v-model="simPrice" minlength="1" maxlength="4")
        .form-wrapper
          p.calculator__p-green(v-if="$i18next.resolvedLanguage === 'ru'") Количество портов в мадеме
          p.calculator__p-green(v-else) Number of ports in the modem
          v-select.selectCountry(v-model="selectedNumberPortModem" :options="arrayForSelectNumberPortModem" label="text" )
        .form-wrapper
          p.calculator__p-green(v-if="$i18next.resolvedLanguage === 'ru'") Количество замен
          p.calculator__p-green(v-else) Number of substitutions
          v-select.selectCountry(v-model="selectedReplacement" :options="arrayForSelectReplacement" label="text" )
        .form-wrapper
          no-ui-slider(@slider="getValueSlider")

        button.button-g(@click.prevent="allCalculations") расчитать

    .calculator__chart.chart
      .chart__title(v-if="$i18next.resolvedLanguage === 'ru'") Результаты
      .chart__title(v-else) Results
      .chart__body
        apexchart(type="radialBar" height="362" :labels="['555']" :options="RadialbarsChart.chartOptions" :series="RadialbarsChart.series")
      ul.chart__list
        li
          .point(style="background: #64AF59")
          span(v-html="$t('calculator.simLine1')")
          span {{ this.numberSimMonthValue.toLocaleString('ru-RU') }} шт.

        li
          .point(style="background: #F7C401")
          span(v-html="$t('calculator.simLine2')")
          span {{ this.netProfitOneSimValue }} ₽

        li(v-if="$i18next.resolvedLanguage === 'ru'")
          .point(style="background: #98E5FB")
          span Окупаемость оборудования м.:
          span {{  this.paybackValue }}
        li(v-else)
          .point(style="background: #98E5FB")
          span Payback of equipment m.:
          span {{ this.paybackValue }}

        li(v-if="$i18next.resolvedLanguage === 'ru'")
          .point(style="background: #9265BE")
          span Доход за {{this.periodValue}} месяцев:
          span  {{ this.profitPeriodDirtyValue.toLocaleString('ru-RU') }} ₽

        li(v-else)
          .point(style="background: #9265BE")
          span Income for {{this.periodValue}} m.:
          span  {{ this.profitPeriodDirtyValue.toLocaleString('ru-RU') }} ₽


        li(v-if="$i18next.resolvedLanguage === 'ru'")
          .point(style="background: #444B8C")
          span Чистая прибыль за {{this.periodValue}} месяцев:
          span {{ this.netProfitPeriodValue.toLocaleString('ru-RU') }} ₽
        li(v-else)
          .point(style="background: #444B8C")
          span Net profit for {{this.periodValue}} m.:
          span {{ this.netProfitPeriodValue.toLocaleString('ru-RU') }} ₽

        //li.hid {{ profitPercentage }}
      //  li
      //    div
      //    span
      //    span {{ averagePriceValue }}



</template>

<script>
import NoUiSlider from "../../noUiSlider/noUiSlider.vue";
import VueApexCharts from "vue3-apexcharts";
import vSelect from 'vue-select';
import axios from "axios"

const SelectCountry = [
  {text: 'Russia', value: 'ru'},
  {text: 'Usa', value: 'en'},
  {text: 'canada', value: 'can'},
];

const numberReplacements = [
  {text: '1 раз в дня', value: 1, replacement: 1},
  {text: '1 раз в два дня', value: 15.5, replacement: 2},
  {text: '1 раз в четыре дня', value: 7.75, replacement: 4},
];

const numberPortModem = [
  {text: "8 портов", value: 8, price: 8407},
  {text: "16 портов", value: 16, price: 12891},
  {text: "32 порта", value: 32, price: 25782},
  {text: "64 порта", value: 64, price: 42420},
  {text: "128 портов", value: 128, price: 103128},
  {text: "256 портов", value: 256, price: 206256},
];

let dat = {
  "chartData": {
    "dates": ["2022-01-21", "2022-01-22", "2022-01-23", "2022-01-24", "2022-01-25", "2022-01-26", "2022-01-27", "2022-01-28", "2022-01-29", "2022-01-30", "2022-01-31", "2022-02-01", "2022-02-02", "2022-02-03", "2022-02-04", "2022-02-05", "2022-02-06", "2022-02-07", "2022-02-08", "2022-02-09", "2022-02-10", "2022-02-11", "2022-02-12", "2022-02-13", "2022-02-14", "2022-02-15", "2022-02-16", "2022-02-17", "2022-02-18", "2022-02-19", "2022-02-20", "2022-02-21", "2022-02-22", "2022-02-23", "2022-02-24", "2022-02-25", "2022-02-26", "2022-02-27", "2022-02-28", "2022-03-01", "2022-03-02", "2022-03-03", "2022-03-04", "2022-03-05", "2022-03-06", "2022-03-07", "2022-03-08", "2022-03-09", "2022-03-10", "2022-03-11", "2022-03-12", "2022-03-13", "2022-03-14", "2022-03-15", "2022-03-16", "2022-03-17", "2022-03-18", "2022-03-19", "2022-03-20", "2022-03-21", "2022-03-22", "2022-03-23", "2022-03-24", "2022-03-25", "2022-03-26", "2022-03-27", "2022-03-28", "2022-03-29", "2022-03-30", "2022-03-31", "2022-04-01", "2022-04-02", "2022-04-03", "2022-04-04", "2022-04-05", "2022-04-06", "2022-04-07", "2022-04-08", "2022-04-09", "2022-04-10", "2022-04-11", "2022-04-12", "2022-04-13", "2022-04-14", "2022-04-15", "2022-04-16", "2022-04-17", "2022-04-18", "2022-04-19", "2022-04-20", "2022-04-21", "2022-04-22", "2022-04-23", "2022-04-24", "2022-04-25", "2022-04-26", "2022-04-27", "2022-04-28", "2022-04-29", "2022-04-30", "2022-05-01", "2022-05-02", "2022-05-03", "2022-05-04", "2022-05-05", "2022-05-06", "2022-05-07", "2022-05-08", "2022-05-09", "2022-05-10", "2022-05-11", "2022-05-12", "2022-05-13", "2022-05-14", "2022-05-15", "2022-05-16", "2022-05-17", "2022-05-18", "2022-05-19", "2022-05-20", "2022-05-21", "2022-05-22", "2022-05-23", "2022-05-24", "2022-05-25", "2022-05-26", "2022-05-27", "2022-05-28", "2022-05-29", "2022-05-30", "2022-05-31", "2022-06-01", "2022-06-02", "2022-06-03", "2022-06-04", "2022-06-05", "2022-06-06", "2022-06-07", "2022-06-08", "2022-06-09", "2022-06-10", "2022-06-11", "2022-06-12", "2022-06-13", "2022-06-14", "2022-06-15", "2022-06-16", "2022-06-17", "2022-06-18", "2022-06-19", "2022-06-20", "2022-06-21", "2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25", "2022-06-26", "2022-06-27", "2022-06-28", "2022-06-29", "2022-06-30", "2022-07-01", "2022-07-02", "2022-07-03", "2022-07-04", "2022-07-05", "2022-07-06", "2022-07-07", "2022-07-08", "2022-07-09", "2022-07-10", "2022-07-11", "2022-07-12", "2022-07-13", "2022-07-14", "2022-07-15", "2022-07-16", "2022-07-17", "2022-07-18", "2022-07-19", "2022-07-20", "2022-07-21", "2022-07-22", "2022-07-23", "2022-07-24", "2022-07-25", "2022-07-26", "2022-07-27"],
    "data": [{
      "values": ["52.708053", "62.763077", "46.632251", "57.320875", "48.660888", "39.361568", "46.477444", "65.051862", "35.747129", "54.258173", "47.022128", "62.820976", "50.067881", "45.495185", "43.660476", "92.120353", "49.544417", "49.552789", "49.735892", "66.795513", "57.398875", "70.438500", "51.500550", "55.895952", "50.531657", "62.127089", "68.528642", "57.874545", "66.524682", "88.143219", "60.792450", "79.767869", "60.465892", "111.980073", "58.628571", "127.306667", "77.245342", "91.237857", "119.749444", "100.018400", "95.006462", "111.242308", "134.847143", "127.222000", "119.820000", "149.130000", "154.050000", "180.228182", "211.261111", "163.628571", "145.788154", "182.491667", "168.457733", "174.915000", "172.136957", "154.487843", "134.533077", "156.117037", "232.441667", "116.388235", "185.289615", "292.526250", "175.487692", "213.106667", "201.666724", "126.462000", "270.216667", "263.795000", 0, "369.946667", 0, "302.893333", "144.024333", "308.847273", "278.114286", "268.736567", "133.650000", "253.605333", "163.217241", "179.910182", "294.250000", "162.351700", "263.322500", "275.467857", "224.892424", "217.326538", "202.912785", "218.225600", "311.791111", "208.736736", "241.501379", "268.450000", "148.325471", "207.688305", "88.996596", "206.874655", "208.176596", "135.243014", "164.660279", "86.006220", "112.653836", "84.182000", "173.514369", "134.675118", "110.917647", "149.060602", "138.368615", "65.743970", "123.105484", "83.965398", "164.934318", "112.007500", "85.349574", "66.915862", "93.960600", "99.295608", "53.369972", "95.608354", "134.625444", "151.368514", "77.678437", "121.355763", "51.714961", "51.579797", "139.811802", "118.929200", "110.902054", "67.464454", "70.599708", "109.059302", "82.301834", "104.063922", "131.237246", "136.388846", "71.030242", "72.214839", "123.021264", "113.875534", "134.689579", "134.879031", "105.516036", "89.743810", "89.363390", "123.075949", "155.799494", "113.213692", "97.046667", "116.829064", "87.302646", "118.179938", "117.367183", "105.959387", "62.605479", "96.752120", "105.756423", "102.201798", "77.916723", "58.888520", "50.098421", "78.020407", "91.658850", "71.424886", "69.493782", "77.755161", "72.641410", "69.301774", "75.851709", "79.782172", "77.010524", "69.683099", "78.287514", "57.787868", "71.193407", "58.298225", "66.197667", "70.394716", "63.314774", "93.457071", "87.493230", "88.650000", "95.160734", "86.897758", "75.751918", "63.465449", "65.184319", "61.067627", "53.691740", "63.192356"],
      "label": "\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
      "color": "#007BFF"
    }, {
      "values": ["24.785600", "31.976122", "34.290000", 0, "57.355556", "52.663158", "28.759815", "15.812000", "66.997027", 0, 0, 0, "232.460000", "43.534875", "9.640000", "18.430000", 0, "85.489130", "68.557895", 0, "43.895758", "127.915000", "122.690000", 0, "18.030000", "61.983636", "27.960000", 0, "66.961667", "18.211600", 0, 0, 0, 0, 0, "77.429375", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "63.839688", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "42.717813", 0, 0, 0, 0, 0, 0, 0, 0, 0, "72.720769", "43.585000", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "32.285625", 0, 0, 0, 0, 0, 0, 0, "100.650000", "241.450000", "155.696667", 0, "429.820000", "154.490000", "184.963333", 0, 0, "123.600000", "106.466250", "144.172222", "114.886667", "120.020000", "107.495714", "96.668667", "54.299706", "124.055000", 0, 0, "77.120000", 0, "173.640000", 0, 0, 0, 0, 0, 0, 0, 0, "69.745313", 0, 0, 0, 0, 0, 0, 0, 0],
      "label": "\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 + \u0430\u0440\u0435\u043d\u0434\u0430",
      "color": "#FF1212"
    }, {
      "values": [0, "115.372000", "95.670000", 0, "153.632500", "132.400000", "132.400000", "110.335000", "164.905000", 0, 0, 0, 0, "153.173750", "126.815000", "93.886667", "111.190000", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "label": "\u041f\u043e\u043b\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430",
      "color": "#14FF00"
    }]
  }
}

export default {
  name: "calculator2",
  components: {
    vSelect,
    NoUiSlider,
    apexchart: VueApexCharts,
    axios
  },
  props: {
    language: String
  },

  data() {
    return {
      //-----selects-------
      //массив стран
      arrayForSelectCountry: SelectCountry,
      //Selected для стран
      selectedCountry: SelectCountry[0],
      //массив с количество замен сим
      arrayForSelectReplacement: numberReplacements,
      //Selected для селекта количество замен сим
      selectedReplacement: numberReplacements[1],
      //массив для кол-ва портов
      arrayForSelectNumberPortModem: numberPortModem,
      //Selected для кол-ва портов
      selectedNumberPortModem:numberPortModem[0],
      //-----select-------

      //-----график-------
      //Настройки графика. Инструкцию настроек смотри https://apexcharts.com/docs/options/#
      RadialbarsChart: {
        series: [0],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },

              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function (val) {
                    return val + ' %';
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Чистая прибыль'],
        },
      },
      //-----график-------



      //кол-во сим карт в месяц
      numberSimMonthValue: 0,

      //Цена 1 сим
      simPrice: 30,

      //стоимость симкарт
      costAllSimValue: 0,

      //прибыль в месяц грязная
      profitMonthDirtyValue: 0,

      //Средний чек по 1 сим
      averagePriceValue: 50,

      //затраты
      expensesValue: 0,

      //прибыль в месяц грязная
      profitMonthValue: 0,

      //прибыль за период грязная
      profitPeriodDirtyValue: 0,

      //окупаемость в месяцах
      paybackValue: 0,

      //чистая прибыль за период
      netProfitPeriodValue: 0,

      //Выбранный период
      periodValue: 1,

      //чистая прибыль 1 сим
      netProfitOneSimValue: 0,
    }
  },
  methods:{
    //получаем период из ползунка
    getValueSlider(event) {
      this.periodValue = event;
    },

    //чистая прибыль 1 сим
    profitOneSim() {
      console.log('чистая прибыль 1 сим   '  + (this.averagePriceValue - this.simPrice))
     return  this.netProfitOneSimValue = this.averagePriceValue - this.simPrice
    },

    //кол-во сим карт в период || кол-во портов * кол-во замен * 30 дней
    numberSim() {
      console.log('кол-во сим карт в месяц   '  + this.selectedReplacement.value * this.selectedNumberPortModem.value * 30 * this.periodValue)
      return this.numberSimMonthValue = this.selectedReplacement.value * this.selectedNumberPortModem.value * 30 * this.periodValue
    },

    //стоимость симкарт || кол-во сим * цену за 1 сим
    costAllSim(){
      console.log('стоимость симкарт   '  + this.numberSimMonthValue * this.simPrice)
      return this.costAllSimValue = this.numberSimMonthValue * this.simPrice
    },

    //прибыль в месяц (грязная) ||  кол-во сим * средний чек по 1 сим
    profitMonthDirty(){
      console.log('прибыль в месяц (грязная)   '  + this.numberSimMonthValue * this.averagePriceValue)
      return this.profitMonthDirtyValue = this.numberSimMonthValue * this.averagePriceValue
    },

    //прибыль за период (грязная) ||  кол-во сим * средний чек по 1 сим
    profitPeriodDirty(){
      console.log('прибыль за период (грязная)   '  + this.numberSimMonthValue * this.averagePriceValue * this.periodValue)
      return this.profitPeriodDirtyValue = this.numberSimMonthValue * this.averagePriceValue * this.periodValue
    },

    //затраты  || цена модема + цена завсе сим)
    expenses(){
      console.log('затраты   '  + (this.selectedNumberPortModem.price + this.costAllSimValue))
      return this.expensesValue = this.selectedNumberPortModem.price + this.costAllSimValue
    },

    //прибыль в месяц  || кол-во портов * средний чек 1 сим * 30 дней
    profitMonth(){
      console.log('прибыль в месяц   '  + (this.selectedNumberPortModem.value * this.averagePriceValue * 30))
      return this.profitMonthValue = this.selectedNumberPortModem.value * this.averagePriceValue * 30
    },

    //окупаемость  || затраты / прибыль
    payback(){
      console.log('окупаемость в месяцах   '  + (Math.ceil(this.expensesValue / this.profitMonthValue)))
      this.paybackValue = Math.ceil(this.expensesValue / this.profitMonthValue)
      if(this.paybackValue === Infinity){ this.paybackValue = 'нерентабельно' } else if(this.paybackValue < 0) { this.paybackValue = 'нерентабельно' }

      return this.paybackValue
    },

    //чистая прибыль за период  || прибыль в мес грязная * период - затрааты
    netProfitPeriod(){
      console.log('чистая прибыль за период   '  + (this.profitMonthValue * this.periodValue - this.expensesValue))
      return this.netProfitPeriodValue = this.profitMonthValue * this.periodValue - this.expensesValue
    },

    //чистая прибыль в % для графика  ||  прибыль / 100
    valuesGraphProfitPercentage(){
      console.log('чистая прибыль в % для графика   '  + Math.ceil( this.netProfitPeriodValue / this.expensesValue * 100 ))
      this.RadialbarsChart.series = [Math.ceil( this.netProfitPeriodValue / this.expensesValue * 100)]
      //мах значение должно быть 100. мин 0
      if(this.RadialbarsChart.series > 100) {
        this.RadialbarsChart.series = [100]
      } else if(this.RadialbarsChart.series < 0){
        this.RadialbarsChart.series = [0]
      }

      return this.RadialbarsChart.series;
    },

    allCalculations(){
      this.numberSim();
      this.costAllSim();
      this.profitMonthDirty();
      this.profitPeriodDirty();
      this.profitOneSim();
      this.expenses();
      this.profitMonth();
      this.payback();
      this.netProfitPeriod();
      this.valuesGraphProfitPercentage()
    }
  },
  mounted() {
    //axios.defaults.headers.common['origin'] = 'localhost'
    // axios.get('/api.php?cat=scripts&act=getSmsStats&slice=1440&dateFrom=2022-01-21&dateTo=2022-07-27&country=1&mobileOperator=0')
    //     .then(response => this.listCountries = response.data.data, e => console.log(e));
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

  &__form{
    display: grid;
    grid-gap: rem(15);

    button.button-g{
      margin-top: rem(30);
    }
  }
  &__container {
    display: grid;
    grid-gap: rem(100);

    @include mq('tablet') {
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(60);
      align-items: center;
    }
    @include mq('desktop') {
      grid-gap: rem(100);
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
    &::placeholder{
      color: #989898;
    }
  }

  &__label{
    font-size: rem(14);
    font-style: italic;
    color: #989898;
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
      grid-template-columns: 15px 1.5fr 1fr;
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

  li.hid{
    height: 0;
    opacity: 0;
  }
}
</style>
