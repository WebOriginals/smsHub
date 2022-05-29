<template lang="pug">
section.howItWorks
  .howItWorks__container
    .howItWorks__content._anim-items
      h2.howItWorks__title  Как <span>это работает</span>?
      p.howItWorks__description Каждый раз, когда пользователи со всего мира ежедневно принимают коды для регистрации
        | на миллионах сервисах от “Пятерочки” и “Nike” до “Facebook” и “Telegram” через ваши SIM-карты
        | <b>вы получаете за это деньги.</b>
        br
        br
        | Все занудные и повторяющиеся действия мы авторизовали в нашем ПО, благодаря которому <b>Вам нужно будет только контролировать замену своих СИМ карт.</b>
      .howItWorks__point
      .howItWorks__point
      .howItWorks__point
    ol.howItWorks__list._anim-items
      li
        h6.howItWorks__list-title Оставьте заявку и подключите оборудование
        p Менеджер проконсультирует по всем интересующим вопросам, подскажет где купить и полностью настроит обородувание
      li
        h6.howItWorks__list-title Меняйте SIM-карты в системе и зарабатывайте
        p В среднем за <b>12 часов сим-карта может заработать до 60 рублей.</b> Клиенты покупают номера, а вы получаете до 75% от их покупок. Чем больше карт- тем больше прибыль.
      li
        h6.howItWorks__list-title Получайте заработанные средства
        p Заработанные средства выводятся на банковскую карту, электронный или криптокошелек и другими способами. Минимальная сумма вывода 250р
</template>

<script>
import {anim} from "../../../assets/js/libs/function_class_add_active";

export default {
  name: "howItWorks",
  mounted() {
    //Функция добавляющаа класс, когда блов в поле видимости у пользователя
    anim();
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/scss/style.scss';

.howItWorks {
  @include adaptiveValue(padding-top, 65, 30);
  @include adaptiveValue(padding-bottom, 65, 30);

  &__container {
    @include mq('tablet-wide') {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: rem(160);
      align-items: center;
    }
  }
  &__title {
    @include adaptiveValue(margin-bottom, 40, 40);
  }
  &__description {

  }
  &__content {
    position: relative;

    @include mq('tablet-wide') {
      &:after{
        content: '';
        top: -200px;
        left: -88px;
        position: absolute;
        width: calc(100% + 200px);
        height: calc(100% + 422.6px);
        border-radius: 50%;
        border: 4px solid $color_3;
        z-index: -2;
      }
      &:before{
        content: '';
        top: -200px;
        left: -88px;
        position: absolute;
        width: calc(50% + 150px);
        height: calc(100% + 422.6px);
        background-color: $color_1;
        z-index: -1;
      }

    }
    @include maq('tablet-wide') {
      margin-bottom: rem(64);
    }
    @include mq('tablet-wide') {
      &._active {
        .howItWorks__point {
          &:nth-child(3) {
            top: 140px;
            left: 252px;

            &:before {
              content: '';
              position: absolute;
              width: 120px;
              height: 2px;
              border-top: 2px dotted $mainColor;
              transform: rotate(-55deg) translateY(-39px) translateX(34px);
              animation: connectionAppearances 1s linear 1 normal 2.5s forwards;
              opacity: 0;
            }

            animation: firstPoint1 2s ease 1 normal 1s forwards;
          }

          &:nth-child(4) {
            top: 140px;
            left: 252px;

            &:before {
              content: '';
              position: absolute;
              width: 81px;
              height: 2px;
              border-top: 2px dotted $mainColor;
              opacity: 0;
              transform: rotate(-92deg) translateY(-33px) translateX(44px);
              animation: connectionAppearances 1s linear 1 normal 7.8s forwards;
            }

            animation: firstPoint2 4s ease 1 normal 4s forwards;
          }

          &:nth-child(5) {
            top: 140px;
            left: 252px;

            &:before {
              content: '';
              position: absolute;
              width: 46px;
              height: 2px;
              opacity: 0;
              border-top: 2px dotted $mainColor;
              transform: rotate(74deg) translateY(16px) translateX(-32px);
              animation: connectionAppearances 1s linear 1 normal 11.5s forwards;
            }

            animation: firstPoint3 4s ease 1 normal 8s forwards;
          }
        }
      }
    }
  }
  &__point{
    @include mq('tablet-wide') {
    width: rem(23);
    height: rem(23);
    border:4px solid $mainColor;
    border-radius: 50%;
    background: $color_4;
    position: absolute;
    transition: .5s;
      opacity: 0;
    }
  }
  &__list {
    display: grid;
    grid-gap: rem(32);
    @include adaptiveValue(grid-gap, 130, 32);
    list-style-type: none;
    counter-reset: num;
    position: relative;

    li {
      position: relative;

      &:before {
        content: counter(num);
        counter-increment: num;
        position: absolute;
        top: 0;
        left: 0;
        width: rem(33);
        height: rem(33);
        border: 3px solid $mainColor;
        border-radius: 50%;
        background: $color_4;
        color: $color_1;
        font-size: rem(20);
        font-weight: 800;
        line-height: 1.4;
        display: flex;
        justify-content: center;
        align-content: center;

        @include mq('tablet-wide') {
          left: -70px;
          width: rem(60);
          height: rem(60);
          font-size: rem(40);
        }
      }

      @include mq('tablet-wide') {
        &:nth-child(2){
          margin-left: 100px;
        }
      }
    }
    @include mq('tablet-wide') {
      &._active {
        li{
          &:nth-child(1){
            opacity: 0;
            animation: connectionText 2s ease 1 normal 3s forwards;
          }
          &:nth-child(2){
            opacity: 0;
            animation: connectionText 2s ease 1 normal 8s forwards;
          }
          &:nth-child(3){
            opacity: 0;
            animation: connectionText 2s ease 1 normal 12s forwards;
          }
        }
      }
    }
  }
  &__list-title {
    @include maq('tablet-wide') {
      padding-left: rem(45);
    }
    margin-bottom: rem(15);
  }
  @keyframes firstPoint1 {
    from {
      transform: rotate(.025turn)
      translateY(-361px) translateY(50%)
      rotate(.1turn);
      opacity: 1;
    }
    to {
      transform: rotate(.1turn)
      translateY(-361px) translateY(50%)
      rotate(.025turn);
      opacity: 1;
    }
  }
  @keyframes firstPoint2 {
    from {
      transform: rotate(.025turn)
      translateY(-361px) translateY(50%)
      rotate(.23turn);
      opacity: 1;
    }
    to {
      transform: rotate(.23turn)
      translateY(-361px) translateY(50%)
      rotate(.025turn);
      opacity: 1;
    }
  }
  @keyframes firstPoint3 {
    from {
      transform: rotate(.025turn)
      translateY(-361px) translateY(50%)
      rotate(.35turn);
      opacity: 1;
    }
    to {
      transform: rotate(.35turn)
      translateY(-361px) translateY(50%)
      rotate(.025turn);
      opacity: 1;
    }
  }
  @keyframes connectionAppearances {
    to {
      opacity: 1;
    }
  }@keyframes connectionText {
    to {
      opacity: 1;
    }
  }

}
</style>
