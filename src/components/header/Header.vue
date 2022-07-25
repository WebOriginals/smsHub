<template lang="pug">
header.header(ref="header" )
  .header__container
    a.header__logo(href="/")
      picture
        source(srcset="@/img/svg/logo-header.svg" media="(min-width: 601px)" type="image/svg+xml")
        source(srcset="@/img/svg/logo-header-m.svg" media="(max-width: 600.99px)" type="image/svg+xml")
        img(src='@/img/svg/logo-header.svg' alt='logo SmsHub')

    nav.header__menu.menu__body(ref="menu__body")
      ul(ref="menu__links")
        li( @click="onHandlerClick('mainForm')")
          .menu__link {{ $t('header.link_1') }}
        li( @click="onHandlerClick('ask')")
          .menu__link {{ $t('header.link_2') }}



    //form.header__language(data-da=".header__menu,992,2")
    //  select-beta(@update:modelValue="setSelected")
    form.header__language(data-da=".header__menu,992,2")
      v-select.leng(
        @update:modelValue="setSelected"
        :modelValue="selected"
        v-model="selected"
        :options="arrayForSelect"
        label="text"
        :searchable="false"
      )
        template(#selected-option="{ img, text }")
          .leng-title
            img(:src="img" style="max-width:38px")
            span(style="color:#fff")  {{ text }}
        template(#option="{ img, text }" )
          .oprion-row(style="display: flex; align-items: center; gap: 15px")
            img(:src="img" style="max-width:38px")




    .menu__icon(@click="showMenuOnMobile"  ref="menu__icon")
      span
</template>

<script>
import {bodyLockStatus, bodyLockToggle} from "../../assets/js/files/functions.js";
import {DynamicAdapt} from "../../assets/js/libs/dynamic_adapt.js";
import vSelect from 'vue-select';
import $i18next from "i18next";
import VueNextSelect from "vue-next-select";


const Select = [
  {text: 'Russia', img: "public/assets/img/png/russia.png", value: 'ru'},
  {text: 'Usa', img: "public/assets/img/png/united-states.png", value: 'en'},
];

export default {
  name: "Header",

  components: {
    vSelect,
    VueNextSelect,
  },

  data() {
    return {
      da: '',
      linksTop: [
        {id: 0, path: "calculator", name: "Калькулятор дохода"},
        {id: 1, path: "mainForm", name: "Стать партнёром"},
        {id: 2, path: "ask", name: "Вопрос/Ответ"},
      ],
      language: 'ru',
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      selected: Select[0],
    }
  },
  emits: ['update:modelValue'],
  methods: {
    //Работа с бургером на мобиле
    showMenuOnMobile() {
      // получаем иконку бургера
      let iconMenu = this.$refs.menu__icon;
      // получаем блок в навигацией
      let bodyMenu = this.$refs.menu__body;
      // проверяем смотрим состояние
      if (bodyLockStatus) {
        // проверяем есть ли у html .lock и блокируем скролл
        bodyLockToggle();
        // меняем состояние бургера
        iconMenu.classList.toggle('_active');
        // показываем меню мобильное
        bodyMenu.classList.toggle('_active');
      }
    },
    // функция для скролла к конкретному блоку
    scrollTo(element) {
      element.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      })
    },
    // обработчик клика по ссылкам меню
    onHandlerClick(index) {
      // получаем конкретную ссылку
      const elementScrollTo = document.getElementById(index);

      if (window.outerWidth <= 990) {
        this.showMenuOnMobile();
        this.scrollTo(elementScrollTo);
      } else {
        this.scrollTo(elementScrollTo)
      }
    },

    setSelected(value) {
      this.language = value.value;
      if ($i18next.resolvedLanguage !== this.language) {
        $i18next.changeLanguage(this.language)
      }
    },


  },

  mounted() {
    //перемещение блоков при разных разрешениях см assets/js/libs/dynamic_adapt.js
    this.da = new DynamicAdapt("max");
    this.da.init();

    let header = this.$refs.header;
    if (header) {
      window.onscroll = function () {
        if (window.pageYOffset > 100) {
          header.classList.add('stickytop');
          this.showWhitLogo = true;
        } else {
          header.classList.remove('stickytop');
          this.showWhitLogo = false;
        }
      };
    }
  },
}

</script>

<style lang="scss">
@import '../../assets/scss/style.scss';

.lending {

  .menu__link {
    cursor: pointer;
  }

  .leng {
    min-width: 180px;
    min-height: 50px;
    @include mq('tablet') {
      min-width: 100px;
    }
    @include mq('tablet') {
      max-width: fit-content;
    }

    .vs__search {
      display: none;
    }

    &-title {
      display: flex;
      align-items: center;
      gap: 15px;

      @include maq('tablet') {
        flex-direction: row-reverse;
      }
      @include mq('tablet') {
        span {
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
