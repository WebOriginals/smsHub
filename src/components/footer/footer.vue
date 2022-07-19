<template lang="pug">
footer.footer
  .footer__container
    .footer__top.footer-top
      a.footer__logo(href="/")
        picture
          source(srcset="@/img/svg/logo-header.svg" media="(min-width: 601px)" type="image/svg+xml")
          img(src='@/img/svg/logo-header.svg' alt='logo SmsHub')
      nav.footer-top__nav
        ul
          li(v-for="link in linksTop"
            :key="link.id"
            @click="onHandlerClick(link.path)"
            )
            .foorer-menu__link {{link.name}}

    .footer__bottom.footer-bottom
      p с 2022. SMS-ACTIVATE.ORG
      nav.footer-bottom__nav
        ul
          li
            a.foorer-menu__link(href="#") Правла проекта
          li
            a.foorer-menu__link(href="#") Публичная оферта
          li
            a.foorer-menu__link(href="#") Положение о сервисе
      .footer-bottom__soc
        p напишите нам:
        a(href="mailto:test@yandex.tu")
          svg(width='30', height='30', viewbox='0 0 30 30', fill='none', xmlns='http://www.w3.org/2000/svg')
            rect(x='0.5', y='0.5', width='29', height='29', rx='4.5', fill='white', stroke='#414042')
            path(d='M6.91042 10.4748L14.1104 14.3426C14.3523 14.4722 14.6653 14.5337 14.9802 14.5337C15.2951 14.5337 15.608 14.4722 15.8499 14.3426L23.0499 10.4748C23.5194 10.2223 23.9629 9.24023 23.1018 9.24023H6.85954C5.99842 9.24023 6.44194 10.2223 6.91042 10.4748ZM23.2679 12.5897L15.8499 16.4556C15.5235 16.6265 15.2951 16.6466 14.9802 16.6466C14.6653 16.6466 14.4368 16.6265 14.1104 16.4556C13.784 16.2847 7.26274 12.8662 6.72994 12.5887C6.35554 12.3929 6.35938 12.6223 6.35938 12.799V19.8002C6.35938 20.2034 6.90274 20.7602 7.31938 20.7602H22.6794C23.096 20.7602 23.6394 20.2034 23.6394 19.8002V12.7999C23.6394 12.6233 23.6432 12.3938 23.2679 12.5897Z', fill='#414042')
        a(href="tg://resolve?domain=username")
          svg(width='31', height='30', viewbox='0 0 31 30', fill='none', xmlns='http://www.w3.org/2000/svg')
            rect(x='0.991211', y='0.5', width='29', height='29', rx='4.5', fill='white', stroke='#414042')
            g(clip-path='url(#clip0_313_649)')
              path(fill-rule='evenodd', clip-rule='evenodd', d='M11.1386 15.9547L7.09082 14.634L20.9186 9.10867C21.6406 8.81367 21.8235 9.142 21.7142 9.805L19.1839 21L14.8965 18.4777L13.113 20.304V17.0143L19.0636 11.4147L11.1386 15.9547Z', fill='#414042')
            defs
              clippath#clip0_313_649
                rect(width='14.6364', height='12', fill='white', transform='translate(7.09082 9)')



</template>

<script>
import ask from "../page/main/ask.vue";
import mainForm from "../page/main/mainForm.vue";
import calculator from "../page/main/calculator.vue";
export default {
  name: "footer",
  components: {
    ask,
    mainForm,
    calculator
  },
  data() {
    return {
      linksTop: [
        {id: 0, path: "calculator", name: "Калькулятор дохода"},
        {id: 1, path: "mainForm", name: "Стать партнёром"},
        {id: 2, path: "ask", name: "Вопрос/Ответ"},
      ],
      linksBottom: [
        {id: 0, path: "", name: "Правла проекта"},
        {id: 1, path: "", name: "Публичная оферта"},
        {id: 2, path: "", name: "Положение о сервисе"},
      ],
    };
  },
  mounted() {

  },

  methods:{
    onHandlerClick(index) {
      const elementScrollTo = document.getElementById(index);
      elementScrollTo.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/style.scss';
.foorer-menu__link{
  cursor: pointer;
}
</style>
