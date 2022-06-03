<template lang="pug">
section.map
  .map__container
    h2.map__title <span>Наша</span> география
    b Можем работать с любой страной, любым оператором и любым объёмом.
    .map__content.map-content
      .map-content__list
        b <span>ТОП-10</span> <br>стран-агентов по заработку предыдущего дня
        ol
          li(v-for="country in listCountries")
            .fl <span>{{ country.Country}}</span> <span>{{country.number}}</span>

      #chartdiv.map-content__map

</template>

<script>

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default {
  name: "ChartMap",
  components: {},
  data() {
    return {
      listCountries: [
        {Country:'Малайзия ', number:'139 082,72 р'},
        {Country:'Китай', number:'104 517,70 р'},
        {Country:'Англия', number:'66 255,09 р'},
        {Country:'Россия', number:'62 888,64 р'},
        {Country:'Германия', number:'56 452,12 р'},
        {Country:'Испания', number:'54 561,02 р'},
        {Country:'Польша', number:'40 134,59 р'},
        {Country:'Бразилия', number:'38 894,16 р'},
        {Country:'Нидерланды', number:'38 731,54 р'},
        {Country:'Португалия', number:'38 179,95 р'},
      ]
    };
  },
  mounted() {
    am5.ready(function() {

      let root = am5.Root.new("chartdiv");

      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoEqualEarth(),
        layout: root.horizontalLayout
      }));


      let polygonSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            valueField: "value",
            calculateAggregates: true
          })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}: {value}"
      });

      polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(12895428),
        max: am5.color(6598489),
        key: "fill"
      }]);

      polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
      });

      //я по этой карте искал id стран https://www.artlebedev.ru/country-list/
      polygonSeries.data.setAll([
        { id: "MY", value: 139082 },
        { id: "CN", value: 104517 },
        { id: "GB", value: 66255 },
        { id: "RU", value: 62888 },
        { id: "DE", value: 56452 },
        { id: "ES", value: 54561 },
        { id: "PL", value: 40134 },
        { id: "BR", value: 38894 },
        { id: "NL", value: 38731 },
        { id: "PT", value: 38179 },
      ]);


      let heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(12895428),
        endColor: am5.color(6598489),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5
      }));

      heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
      });

      heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
      });

      polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
      });
    });
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/style.scss';

.map{
  @include adaptiveValue(padding-top, 65, 30);
  @include adaptiveValue(padding-bottom, 65, 30);

  &__container{

  }
  &__title{
    margin-bottom: rem(40);
  }

  &-content{
    display: grid;
    grid-gap: rem(30);
    @include adaptiveValue(margin-top, 100, 30);

    @include mq('tablet-wide') {
     grid-template-columns: 1.2fr 3fr;
      grid-gap: rem(60);
    }
    &__list{
      b {
        span {
          color: $color_4;
          font-weight: 900;
          font-size: rem(20);
        }

      }
      ol{
        margin-top: rem(30);
        display: grid;
        grid-gap: rem(12);
      }
      li{
        padding-right: rem(30);
        transform: translateX(30px);

        .fl{
          display: flex;
          gap: rem(15);
          justify-content: space-between;
        }
      }
    }
  }
}
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
