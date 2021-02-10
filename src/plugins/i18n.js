import { createI18n } from 'vue3-i18n';

const messages = {
  en: {
    enableLightTheme: 'Click to enable Light Theme',
    disableLightTheme: 'Click to disable Light Theme',
    loading: 'Loading',
    backToTop: 'Back to top',
  },
  'pt-br': {
    enableLightTheme: 'Clique para habilitar o Modo Escuro',
    disableLightTheme: 'Clique para desabilitar o Modo Escuro',
    loading: 'Carregando',
    backToTop: 'Voltar ao topo',
  },
};

const i18n = createI18n({
  locale: 'en',
  messages: messages,
});

export default i18n;
