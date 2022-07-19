<template lang="pug">
section.mainForm#mainForm(ref="mainForm")
  .mainForm__container
    h2.mainForm__title Стать партнёром <span>SMSHUB</span>
    p <b>Не тратьте время и деньги на работу с сайтами и кодированием</b> — мы сосредоточены на задачах вашего бизнеса и
      | поэтому создали простую, удобную и эффективную платформу для заработка на сим-картах. <br> <span> <b>Просто заполните форму
      | и отправьте заявку на подключение</b></span>
    form
      .mainForm__call
        label(for="name") Ваше имя
        input.input#name(placeholder="Иван" name="name" v-model="state.name" minlength="2" maxlength="20" required )
      .mainForm__call
        label(for="email") Ваш e-mail*
        input.input#email(placeholder="Name@mail.ru" name="email" v-model="state.email" required)
        //span(v-if="v$.state.email.$error") {{ v$.email.$errors[0].$message }}
      .mainForm__call
        label(for="telegram") Телеграм*
        input.input#telegram(placeholder="Номер или @юзернейм" name="telegram" v-model="state.telegram" minlength="2" maxlength="50" required)
      .mainForm__call
        label(for="country") Страны использования sim-карт
        input.input#country(placeholder="Росиия, Англия, Германия..." name="country" v-model="country")
      .mainForm__call
        label Какое у вас оборудование?
        v-select.form-select(v-model="selectedEquipment" name="equipment" :options="equipment" label="text" )
      .mainForm__call
        label Количество портов
        input.input#quantityPorts(placeholder="2" type="number"  name="quantityPorts" v-model="quantityPorts")

      button.button-e.button-height(type="submit" @click.prevent="submitForm") отправить заявку


</template>

<script>
import vSelect from 'vue-select';
import OpenIndicator from 'vue-select/src/components/OpenIndicator.vue';

import useVuelidate from "@vuelidate/core"
import { required, email, minLength} from "@vuelidate/validators";
import {reactive, computed } from "vue";

const SelectEquipment = [
  {text: 'Дешовое', value: 'low'},
  {text: 'Средние', value: 'average'},
  {text: 'Дорогое', value: 'expensive'},
];


export default {
  name: "mainForm",

  components: {
    vSelect,
    OpenIndicator
  },

  setup() {
    const state = reactive({
      name: "",
      email: "",
      telegram: "",
    })
    const rules = computed(() => {
      return{
        name: {required, minLength: minLength(2)},
        email: {required, email },
        telegram: {required, minLength: minLength(3)},
      }
    })
    const v$ = useVuelidate(rules, state)
    return{
      state,
      v$
    }
  },
  data() {
    return {
      v$:useVuelidate(),
      equipment: SelectEquipment,
      //Selected для селекта
      selectedEquipment: SelectEquipment[0],
      country: "",
      quantityPorts: "",
    }
  },

  methods: {
    submitForm(){

      this.v$.$validate()
      if(!this.v$.$error){
        alert('form successfully submit ')
      } else {
        alert('form falid')
      }

    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/style.scss';

.lending .mainForm {
  @include adaptiveValue(margin-bottom, 65, 30);
  @include adaptiveValue(padding-top, 250, 250);
  @include adaptiveValue(padding-bottom, 165, 60);
  color: $color_1;
  position: relative;
  background: url("../../../../public/assets/img/svg/bg-form-spa-none.svg") no-repeat;
  background-position: center right;
  background-size: cover;

  @include maq('tablet') {
    background: url("../../../../public/assets/img/svg/bg-form.svg") no-repeat center;
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
      padding: em(10) em(20);
    }
    .vs__selected{
      font-size: rem(18);
    }
    .vs__clear,
    .vs__open-indicator {
      fill: #394066;
    }
  }
}
</style>
