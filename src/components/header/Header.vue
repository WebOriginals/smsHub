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
          a.menu__link(href="#") Калькулятор дохода
        li
          a.menu__link(href="#") Стать партнёром
        li
          a.menu__link(href="#") Вопрос/Ответ

    .header__language(data-da=".header__menu,992,2")
      CustomSelect(:selectLanguage="selectLanguage" :classNameSelect="classNameSelect")
    .menu__icon(@click="showMenuOnMobile" ref="menu__icon")
      span
</template>

<script>
import CustomSelect from "../customSelect/CustomSelect.vue";
import {bodyLockStatus, bodyLockToggle} from "../../assets/js/files/functions.js";
import {DynamicAdapt} from "../../assets/js/libs/dynamic_adapt.js";

export default {
  name: "Header",
  components: {
    CustomSelect
  },
  data(){
    return {
      classNameSelect: 'language',
      selectLanguage: [
        {text: 'Russia', img: "../../src/assets/img/png/russia.png"},
        {text: 'Usa', img: "../../src/assets/img/png/united-states.png"},
      ],
      da: '',
    }
  },
  methods: {
    showMenuOnMobile(){
      let iconMenu = this.$refs.menu__icon;
      let bodyMenu = this.$refs.menu__body;
      let listLinks = this.$refs.menu__links;
      if(bodyLockStatus){
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
  }
}
</script>

<style scoped>

</style>
