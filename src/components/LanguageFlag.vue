<template>
  <div class="image">
    <img title="USA" @click="changeLanguage('en')" src="@/assets/images/us-flag.png" alt="US" />
    <img title="Brasil" @click="changeLanguage('pt-br')" class="m-l-10" src="@/assets/images/brazil-flag.png" alt="Brasil" />
  </div>
</template>

<script>
export default {
  name: 'LanguageFlag',
  methods: {
    changeLanguage(locale) {
      this.$i18n.setLocale(locale);
      localStorage.setItem('locale', locale);

      let apiLang = 'us';

      if (locale === 'pt-br') {
        apiLang = 'br'
      }

      this.emitter.emit('change-language', apiLang);
      localStorage.setItem('apiLang', apiLang);
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  align-items: center;

  img {
    height: 30px;
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
