<template lang="pug">
header.header
  .header__container
    a.header__logo(href="/")
      picture
        source(srcset="../../assets/img/svg/logo-header.svg" media="(min-width: 601px)" type="image/svg+xml")
        source(srcset="../../assets/img/svg/logo-header-m.svg" media="(max-width: 600.99px)" type="image/svg+xml")
        img(src='../../assets/img/svg/logo-header.svg' alt='logo SmsHub')



    nav.header__menu.menu__body(ref="menu__body")
      ul(ref="menu__links")
        li
          a.menu__link(href="#" data-goto="calculator") Калькулятор дохода
        li
          a.menu__link(href="#" data-goto="mainForm") Стать партнёром
        li
          a.menu__link(href="#" data-goto="ask") Вопрос/Ответ

    .header__language(data-da=".header__menu,992,2")
      v-select.leng(v-model="selected" :options="arrayForSelect" label="text" :searchable="false")
        template(#selected-option="{ img, text }")
          .leng-title
            img(:src="img" style="max-width:38px")
            span(style="color:#fff")  {{ text }}
        template(#option="{ img, text }" )
          .oprion-row(style="display: flex; align-items: center; gap: 15px")
            img(:src="img" style="max-width:38px")


    .menu__icon(@click="showMenuOnMobile" ref="menu__icon")
      span
</template>

<script>
import {bodyLockStatus, bodyLockToggle} from "../../assets/js/files/functions.js";
import {DynamicAdapt} from "../../assets/js/libs/dynamic_adapt.js";
import vSelect from 'vue-select';
import {pageNavigation} from "../../assets/js/files/scroll/scroll.js";

const Select = [
  {text: 'Russia', img: "../../src/assets/img/png/russia.png", value: 'ru'},
  {text: 'Usa', img: "../../src/assets/img/png/united-states.png", value: 'en'},
];

export default {
  name: "Header",
  components: {
    vSelect
  },
  data() {
    return {
      //Пропс class для селекта
      classNameSelect: 'language',
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      selected: Select[0],
      //
      da: '',
    }
  },
  methods: {
    //Работа с бургером на мобиле
    showMenuOnMobile() {
      let iconMenu = this.$refs.menu__icon;
      let bodyMenu = this.$refs.menu__body;

      if (bodyLockStatus) {
        bodyLockToggle();
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
      }
    }
  },
  mounted() {
    //перемещение блоков при разных разрешениях см assets/js/libs/dynamic_adapt.js
    this.da = new DynamicAdapt("max");
    this.da.init();
    pageNavigation();
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/style.scss';
.lending{

  .leng {
    min-width: 180px;
    min-height: 50px;
    @include mq('tablet') {
      min-width: 100px;
    }
    @include mq('tablet') {
      max-width: fit-content;
    }
    .vs__search{
      display: none;
    }

    &-title{
      display: flex;
      align-items: center;
      gap: 15px;

      @include maq('tablet') {
        flex-direction: row-reverse;
      }
      @include mq('tablet') {
        span{
          display: none;
        }
      }
    }

    .vs__dropdown-toggle {
      height: 100%;
      border: none;
    }

    .vs__open-indicator {
      path {
        fill: #fff
      }
    }

    .vs__dropdown-menu {
      top: 50px;
      @include mq('tablet') {
        max-width: 100px;
        min-width: 10px;
      }
    }
  }

  .vs__open .vs__dropdown-toggle {
    background-color: #fff;
    height: 100%;
    opacity: 1;
  }
}
</style>
