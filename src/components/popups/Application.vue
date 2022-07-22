<template lang="pug">
#Application.popup.Application(aria-hidden='true')
  .popup__wrapper
    .popup__content.Application-content
      button.popup__close(data-close, type='button')
        svg(width='15', height='15', viewbox='0 0 15 15', fill='none', xmlns='http://www.w3.org/2000/svg')
          g(opacity='0.5')
            path(d='M8.50698 7.50027L14.4284 1.57884C14.5454 1.4422 14.6066 1.26643 14.5996 1.08666C14.5927 0.906894 14.5182 0.736366 14.391 0.609156C14.2637 0.481945 14.0932 0.407422 13.9135 0.400478C13.7337 0.393534 13.5579 0.454682 13.4213 0.571701L7.49984 6.49313L1.57841 0.564558C1.44391 0.430055 1.26149 0.354492 1.07127 0.354492C0.881054 0.354492 0.69863 0.430055 0.564127 0.564558C0.429624 0.69906 0.354062 0.881485 0.354062 1.0717C0.354062 1.26192 0.429624 1.44434 0.564127 1.57884L6.4927 7.50027L0.564127 13.4217C0.489354 13.4857 0.428626 13.5645 0.385752 13.6531C0.342878 13.7418 0.318785 13.8383 0.314985 13.9367C0.311186 14.035 0.327761 14.1331 0.363672 14.2248C0.399582 14.3164 0.454052 14.3997 0.523663 14.4693C0.593273 14.5389 0.676521 14.5934 0.768182 14.6293C0.859843 14.6652 0.957937 14.6818 1.05631 14.678C1.15468 14.6742 1.2512 14.6501 1.33982 14.6072C1.42844 14.5643 1.50724 14.5036 1.57127 14.4288L7.49984 8.50741L13.4213 14.4288C13.5579 14.5459 13.7337 14.607 13.9135 14.6001C14.0932 14.5931 14.2637 14.5186 14.391 14.3914C14.5182 14.2642 14.5927 14.0936 14.5996 13.9139C14.6066 13.7341 14.5454 13.5583 14.4284 13.4217L8.50698 7.50027Z', fill='black')

      .popup__body.Application__body.Application-body
        h5.Application-body__title(v-html="$t('modal.title')")
        p.Application-body__description(v-html="$t('modal.subtitle')")
        form.Application-form
          .Application-form__coll
            input.input(v-if="$i18next.resolvedLanguage === 'ru'" ref="formTelegram" placeholder='Никнейм Телеграм' v-model="telegram"  minlength="2" maxlength="50" required)
            input.input(v-else ref="formTelegram" placeholder='Name user Telegram' v-model="telegram"  minlength="2" maxlength="50" required)

          .Application-form__coll
            v-select.form-select(v-if="$i18next.resolvedLanguage === 'ru'" class="vs__search" multiple v-model="selectedCountry" name="equipment" :options="country" label="text" )
            v-select.form-select(v-else class="vs__search" multiple v-model="selectedCountryEN" name="equipment" :options="countryEN" label="text" )


          b(v-html="$t('modal.secondTitle')")
          .Application-form__coll.radio
            input(type="radio" id="GoIP" value="GoIP" v-model="equipment")
            label(for="GoIP") GoIP

          .Application-form__coll.radio
            input(type="radio" id="GSM" value="GSM" v-model="equipment")
            label(for="GSM") {{ $t('modal.radioBtn.radio_1') }}

          .Application-form__coll.radio
            input(type="radio" id="noEquipment" value="noEquipment" v-model="equipment")
            label(for="noEquipment") {{ $t('modal.radioBtn.radio_2') }}

          .Application-form__coll.radio
            input(type="radio" id="API" value="API"  v-model="equipment")
            label(for="API") {{ $t('modal.radioBtn.radio_3') }}

          .Application-form__coll
            input.input(v-if="$i18next.resolvedLanguage === 'ru'" placeholder='Количество портов Вашего оборудования' type="number" v-model="quantityPorts")
            input.input(v-else placeholder='Number of ports of your equipment' type="number" v-model="quantityPorts")

          button.button-e.button-height {{ $t('modal.textBtn') }}


</template>

<script>
import vSelect from 'vue-select';
import OpenIndicator from 'vue-select/src/components/OpenIndicator.vue';


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
  name: "Application",

  components: {
    vSelect,
    OpenIndicator
  },

  data() {
    return {
      equipment:'GSM',
      telegram:'',
      country: SelectCountry,
      countryEN: SelectCountryEN,
      selectedCountry: SelectCountry[0],
      selectedCountryEN: SelectCountryEN[0],
      quantityPorts: '',
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss">

.form-select{
  &.vs__search,
  &.vs__search:focus {
    width: 100%;
    padding: 0;
  }

  .vs__selected{
    background: none;
    border: none;
  }
  .vs__dropdown-toggle{
    height: 56px;
    border: 1px solid #414042;
  }
}

</style>
