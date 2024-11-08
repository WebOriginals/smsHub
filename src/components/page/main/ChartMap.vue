<template lang="pug">
section.map
  .map__container
    h2.map__title(v-html="$t('map.title')")
    b(v-html="$t('map.description')")
    .map__content.map-content
      .map-content__list
        b(v-html="$t('map.titleList')")
        ol(v-if="$i18next.resolvedLanguage === 'ru'")
          li(v-for="country in listCountries" :key="country.id")
            .fl <span>{{ country.nameRU}}</span> <span>{{country.value.toLocaleString('ru-RU')}} ₽</span>
        ol(v-else)
          li(v-for="country in listCountries" :key="country.id")
            .fl <span>{{ country.nameEN}}</span> <span>{{country.value.toLocaleString('en-EN')}} $</span>

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
        {id: "MY", nameRU: 'Малайзия', nameEN: 'Malaysia', value: 139082},
        {id: "CN", nameRU: 'Китай', nameEN: 'China',  value: 104517},
        {id: "GB", nameRU: 'Англия', nameEN: 'England', value: 66255},
        {id: "RU", nameRU: 'Россия', nameEN: 'Russia', value: 62888},
        {id: "DE", nameRU: 'Германия', nameEN: 'Germany', value: 56452},
        {id: "ES", nameRU: 'Испания', nameEN: 'Spain',  value: 54561},
        {id: "PL", nameRU: 'Польша', nameEN: 'Poland', value: 40134},
        {id: "BR", nameRU: 'Бразилия', nameEN: 'Brazil', value: 38894},
        {id: "NL", nameRU: 'Нидерланды', nameEN: 'Niederladny', value: 38731},
        {id: "PT", nameRU: 'Португалия', nameEN: 'Portugal', value: 38179},
      ],
    };
  },
  mounted() {
    let countries = this.listCountries;
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
        tooltipText: "{name}: {value}",
        stroke: am5.color(0xffffff),
        fill: am5.color(0xd4d4d4),
      });

      polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0xD8EAD6),
        max: am5.color(0x64AF59),
        key: "fill"
      }]);

      polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
      });

      //я по этой карте искал id стран https://www.artlebedev.ru/country-list/
      polygonSeries.data.setAll(countries);

      let heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0xD8EAD6),
        endColor: am5.color(0x64AF59),
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

.lending .map{
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
