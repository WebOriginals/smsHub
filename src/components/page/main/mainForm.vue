<template lang="pug">
section.mainForm
  .mainForm__container
    h2.mainForm__title Стать партнёром <span>SMSHUB</span>
    p <b>Не тратьте время и деньги на работу с сайтами и кодированием</b> — мы сосредоточены на задачах вашего бизнеса и
      | поэтому создали простую, удобную и эффективную платформу для заработка на сим-картах. <br> <span> <b>Просто заполните форму
      | и отправьте заявку на подключение</b></span>
    form
      .mainForm__call
        label(for="name") Ваше имя
        input.input#name(placeholder="Иван")
      .mainForm__call
        label(for="email") Ваш e-mail*
        input.input#email(placeholder="Name@mail.ru")
      .mainForm__call
        label(for="telegram") Телеграм*
        input.input#telegram(placeholder="Номер или @юзернейм")
      .mainForm__call
        label(for="country") Страны использования sim-карт
        input.input#country(placeholder="Росиия, Англия, Германия...")
      .mainForm__call
        label Какое у вас оборудование?
        v-select.form-select(v-model="selectedEquipment" :options="equipment" label="text" )
      .mainForm__call
        label Количество портов
        v-select.form-select(v-model="selectedPort" :options="Port" label="text" )

      button.button-e отправить заявку


</template>

<script>
import vSelect from 'vue-select';
import OpenIndicator from 'vue-select/src/components/OpenIndicator.vue';

const SelectEquipment = [
  {text: 'Дешовое', value: 'low'},
  {text: 'Средние', value: 'average'},
  {text: 'Дорогое', value: 'expensive'},
];
const SelectPort = [
  {text: '1', value: '1'},
  {text: '2', value: '2'},
  {text: '3', value: '3'},
];

export default {
  name: "mainForm",
  components: {
    vSelect,
    OpenIndicator
  },
  data() {
    return {
      equipment: SelectEquipment,
      //Selected для селекта
      selectedEquipment: SelectEquipment[0],
      Port: SelectPort,
      //Selected для селекта
      selectedPort: SelectPort[0],

    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/style.scss';

.mainForm {
  @include adaptiveValue(margin-bottom, 65, 30);
  @include adaptiveValue(padding-top, 250, 250);
  @include adaptiveValue(padding-bottom, 165, 60);
  color: $color_1;
  position: relative;
  background: url("../../../assets/img/svg/bg-form-spa-none.svg") no-repeat center;
  background-size: cover;

  @include maq('tablet') {
    background: url("../../../assets/img/svg/bg-form.svg") no-repeat center ;
    background-size: cover;
  }

  &__title {
    @include adaptiveValue(margin-bottom, 40, 40);
  }

  p {
    span {
      color: $color_4;
    }
  }

  &__call {
    display: grid;
    grid-gap: rem(5);
  }

  form {
    display: grid;
    grid-gap: rem(20) rem(30);
    @include adaptiveValue(margin-top, 50, 30);
    @include mq('phone-wide') {
      grid-template-columns: 1fr 1fr ;
    }
    @include mq('tablet-wide') {
      grid-template-columns: 1fr 1fr 1fr;
    }

    label {
      color: $color_4;
      font-weight: 600;
    }
  }

  .form-select {
    .vs__search::placeholder,
    .vs__dropdown-toggle,
    .vs__dropdown-menu {
      background: $color_1;
      border: none;
      color: #394066;
      text-transform: lowercase;
      font-variant: small-caps;
    }

    .vs__dropdown-toggle {
      height: 56px;
      padding: em(14) em(20);
    }
    .vs__selected{
      font-size: rem(16);
    }
    .vs__clear,
    .vs__open-indicator {
      fill: #394066;
    }
  }
}
</style>
