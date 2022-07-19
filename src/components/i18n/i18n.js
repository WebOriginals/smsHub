
import { createI18n } from 'vue-i18n'
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ru: {
        message: {
            hello: 'Таки здравствуйте'
        }
    }
}
const i18n = createI18n({
    locale: 'en',
    messages
})
export default i18n
