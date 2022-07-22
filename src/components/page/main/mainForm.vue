<template lang="pug">
section.mainForm#mainForm(ref="mainForm")
  .mainForm__container
    h2.mainForm__title(v-html="$t('mainForm.title')")
    p(v-html="$t('mainForm.description')")
    form(action="#" id="form" method="post" enctype="multipart/form-data" autocomplete="off")
      .mainForm__call
        label(for="name") {{ $t('mainForm.labelName') }}
        input.input#name(ref="formName" placeholder="Иван" name="name" v-model="name" minlength="2" maxlength="20" @change="formNameValid" required )
      .mainForm__call
        label(for="email") {{ $t('mainForm.labelEmail') }}
        input.input#email(ref="formEmail" placeholder="Name@mail.ru" name="email" v-model="email" @change="formEmailValid" required)

      .mainForm__call
        label(for="telegram") {{ $t('mainForm.labelTelegram') }}
        input.input#telegram(ref="formTelegram" placeholder="+7 (9... или @user" name="telegram" v-model="telegram" minlength="2" maxlength="50" @change="formTelegramValid" required)
      .mainForm__call
        label {{ $t('mainForm.labelSelectedCountry') }}
        v-select.form-select(v-if="$i18next.resolvedLanguage === 'ru'" class="vs__search" multiple v-model="selectedCountry" name="equipment" :options="country" label="text" )
        v-select.form-select(v-else class="vs__search" multiple v-model="selectedCountryEN" name="equipment" :options="countryEN" label="text" )
      .mainForm__call
        label {{ $t('mainForm.labelSelectedEquipment') }}
        v-select.form-select(v-if="$i18next.resolvedLanguage === 'ru'" v-model="selectedEquipment" name="equipment" :options="equipment" label="text" )
        v-select.form-select(v-else v-model="selectedEquipmentEN" name="equipment" :options="equipmentEN" label="text" )
      .mainForm__call
        label {{ $t('mainForm.labelQuantityPorts') }}
        input.input#quantityPorts(placeholder="2" type="number"  name="quantityPorts" v-model="quantityPorts")

      button.button-e.button-height(type="submit" @click="submitForm") {{ $t('mainForm.textBtn') }}


</template>

<script>
import vSelect from 'vue-select';
import OpenIndicator from 'vue-select/src/components/OpenIndicator.vue';



const SelectEquipment = [
  {text: 'Дешовое', value: 'low'},
  {text: 'Средние', value: 'average'},
  {text: 'Дорогое', value: 'expensive'},
];

const SelectEquipmentEN = [
  {text: 'Cheap', value: 'low'},
  {text: 'Medium', value: 'average'},
  {text: 'Expensive', value: 'expensive'},
];

const SelectCountry = [
  {text: 'Россия', value: 'ru'},
  {text: 'Терция', value: 'tu'},
  {text: 'Грузия', value: 'gr'},
];

const SelectCountryEN = [
  {text: 'Russia', value: 'ru'},
  {text: 'Turkey', value: 'tu'},
  {text: 'Georgia', value: 'gr'},
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
      equipmentEN: SelectEquipmentEN,
      //Selected для селекта
      selectedEquipment: SelectEquipment[0],
      selectedEquipmentEN: SelectEquipmentEN[0],

      country: SelectCountry,
      countryEN: SelectCountryEN,
      selectedCountry: SelectCountry[0],
      selectedCountryEN: SelectCountryEN[0],

      name: "",
      email: "",
      telegram: "",
      quantityPorts: 3,
    }
  },


  methods: {
    formNameValid(){
      const name = this.$refs.formName;
      const nameAdMinLength = +name.getAttribute('minlength');
      const nameAdMaxLength = +name.getAttribute('maxlength');

      if (name.value.length < nameAdMinLength) {
        name.setCustomValidity(`Минимальное количество символов ${nameAdMinLength}, добавьте ещё ${nameAdMinLength - name.value.length} симв.`);
      } else if (name.value.length > nameAdMaxLength) {
        name.setCustomValidity(`Максимально количество символов ${nameAdMaxLength}, удалите лишние ${name.value.length - nameAdMaxLength} симв.`);
      } else {
        name.setCustomValidity('');
      }
      name.reportValidity();
    },

    formEmailValid() {
      const email = this.$refs.formEmail;

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value)) {
        email.setCustomValidity(`Емаил не соответствует стандартам Пример : ivanov18@gmail.com`);
      }  else {
        email.setCustomValidity('');
      }
      email.reportValidity();
    },

    formTelegramValid() {
      const telegram = this.$refs.formTelegram;

      if (telegram.value.length < telegramAdMinLength) {
        telegram.setCustomValidity(`Минимальное количество символов ${telegramAdMinLength}, добавьте ещё ${telegramAdMinLength - telegram.value.length} симв.`);
      } else if (telegram.value.length > telegramAdMaxLength) {
        telegram.setCustomValidity(`Максимально количество символов ${telegramAdMaxLength}, удалите лишние ${telegram.value.length - telegramAdMaxLength} симв.`);
      } else {
        telegram.setCustomValidity('');
      }
      telegram.reportValidity();
    },

    submitForm(){

      //alert(name)
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

    &.vs__search,
    &.vs__search:focus {
      width: 100%;
      padding: 0;
    }
    .vs__selected{
      background: none;
      border: none;
    }
  }
}
</style>
