<template lang="pug">
section.ask#ask(ref="ask")
  .ask__container
    h2.ask__title(v-html="$t('ask.title')")
    .spollers(data-spollers data-one-spoller)
      //.spollers__wrapper
      //  .spollers__title(data-spoller) {{ $t('ask.firstSpoller.title') }}
      //  .spollers__body(v-html="$t('ask.firstSpoller.description')")

      .spollers__wrapper
        .spollers__title(data-spoller) {{ $t('ask.secondSpoller.title') }}
        .spollers__body(v-html="$t('ask.secondSpoller.description')")

      //.spollers__wrapper
      //  .spollers__title(data-spoller) {{ $t('ask.thirdSpolller.title') }}
      //  .spollers__body(v-html="$t('ask.thirdSpolller.description')")
      //
      //.spollers__wrapper
      //  .spollers__title(data-spoller) {{ $t('ask.fourthSpolller.title') }}
      //  .spollers__body(v-html="$t('ask.fourthSpolller.description')")
      //
      //.spollers__wrapper
      //  .spollers__title(data-spoller) {{ $t('ask.fifthSpolller.title') }}
      //  .spollers__body(v-html="$t('ask.fifthSpolller.description')")


</template>

<script>
import {spollers} from "../../../assets/js/files/functions.js";
export default {
  name: "ask",
  mounted() {
    spollers();
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/style.scss';

.lending .ask{
  @include adaptiveValue(padding-top, 65, 30);
  @include adaptiveValue(padding-bottom, 65, 30);

  &__title{
    margin-bottom: 40px;
  }
}
</style>
