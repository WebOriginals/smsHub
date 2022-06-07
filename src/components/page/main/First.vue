<template lang="pug">
section.first
  .first__container
    .first__content
      h1 <span>ЗАРАБАТЫВАЙ </span> НА СИМ-КАРТАХ
      p Ваши номера будут продаваться на самом крупном сервисе смс активаций, что позволит получать <span>прибыль до 75% с первых минут после полного подключения.</span>
      .first__btns
        button.button-e.popup-link(data-popup="#Application") оставь заявку
        a.button-w(href="#" data-goto="calculator") Рассчитать прибыль
    .first__greenLine
      img(src="../../../assets/img/png/first.png")
    .first__soc(data-da=".header__menu,992,last")
      a(href="https://tlgg.ru/@dklnn")
        svg(width='32', height='32', viewbox='0 0 32 32', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M29.9192 6.16302L25.6942 26.088C25.3752 27.494 24.5442 27.844 23.3632 27.182L16.9252 22.438L13.8192 25.426C13.4752 25.77 13.1882 26.057 12.5252 26.057L12.9882 19.501L24.9192 8.72002C25.4382 8.25802 24.8062 8.00102 24.1132 8.46402L9.36319 17.752L3.01319 15.764C1.63219 15.333 1.60719 14.383 3.30119 13.72L28.1382 4.15102C29.2882 3.72002 30.2942 4.40702 29.9192 6.16402V6.16302Z', fill='#64AF59')

      a(href="mailto:web-originals@yandex.ru")
        svg(width='32', height='32', viewbox='0 0 32 32', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M2.51801 8.45762L14.518 14.904C14.9212 15.12 15.4428 15.2224 15.9676 15.2224C16.4924 15.2224 17.014 15.12 17.4172 14.904L29.4172 8.45762C30.1996 8.03682 30.9388 6.40002 29.5036 6.40002H2.43321C0.998012 6.40002 1.73721 8.03682 2.51801 8.45762ZM29.7804 11.9824L17.4172 18.4256C16.8732 18.7104 16.4924 18.744 15.9676 18.744C15.4428 18.744 15.062 18.7104 14.518 18.4256C13.974 18.1408 3.10521 12.4432 2.21721 11.9808C1.59321 11.6544 1.59961 12.0368 1.59961 12.3312V24C1.59961 24.672 2.50521 25.6 3.19961 25.6H28.7996C29.494 25.6 30.3996 24.672 30.3996 24V12.3328C30.3996 12.0384 30.406 11.656 29.7804 11.9824Z', fill='#64AF59')



</template>

<script>
import {DynamicAdapt} from "../../../assets/js/libs/dynamic_adapt.js";
import {pageNavigation} from "../../../assets/js/files/scroll/scroll.js";

export default {
  name: "First",
  mounted() {
    //Перемещение блоков при разных разрешениях см assets/js/libs/dynamic_adapt.js
    this.da = new DynamicAdapt("max");
    this.da.init();
    pageNavigation();
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/scss/style.scss';

.first {
  @include adaptiveValue(margin-bottom, 65,30);

  &__container {
    position: relative;
    max-width: 100%;
    @include mq('tablet-wide') {
      padding: 0 rem(53);
    }
  }

  &__content {
    padding-top: 100px;
    padding-bottom: 200px;
    span{
      color:$color_4;
    }
    p{
      font-style: italic;
    }
    @include maq('tablet-small') {
     h1, p, span{
       color: $color_1;
     }
    }
    @include mq('tablet-small') {
      height: 100vh;
      width: 100%;
      max-width: rem(380);
      display: grid;
      align-content: center;
    }
    @include mq('tablet-wide') {
      max-width: rem(450);
      padding-bottom: 100px;
    }
    @include mq('desktop') {
      max-width: rem(500);
      padding-bottom: 100px;
    }
  }

  &__btns {
    @include adaptiveValue(margin-top, 86, 32);
    display: grid;
    grid-gap: rem(16) rem(22);
    @include mq('desktop') {
      grid-template-columns: 230px 275px;
    }
  }
  &__greenLine{
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    @include mq('tablet-small') {
      right: -100px;
    }

    @include mq('desktop') {
      right: 0;
    }

    img{
      position: absolute;
      width: calc(100% + 400px);
      height: 100%;
      top: 0;
      right: 0;

      @include mq('tablet-small') {
        width: 100%;
        object-fit: fill;
        object-position: right;
      }
    }
  }
}
</style>
