<template>
  <Header />
  <Main />
  <BackToTop />
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';
import BackToTop from '@/components/BackToTop';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    BackToTop,
  },

  created() {
    let locale = localStorage.getItem('locale');
    let apiLang = localStorage.getItem('apiLang') ?? 'us';
    const theme = localStorage.getItem('theme');

    this.$i18n.setLocale(locale);
    localStorage.setItem('apiLang', apiLang);
    document.documentElement.setAttribute('data-theme', theme);
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
