import {createI18n} from 'vue-i18n'
import frUs from './fr.json'
import enUS from './en.json'

type MessageSchema = typeof frUs

const i18n  = createI18n<[MessageSchema], 'fr-FR' | 'en-US'>({
    locale:import.meta.env.VUE_APP_I18N_LOCALE || 'fr-FR', 
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr-FR',
    messages:{
        'fr-FR':frUs, 
        'en-US':enUS
    }

})

export default i18n
