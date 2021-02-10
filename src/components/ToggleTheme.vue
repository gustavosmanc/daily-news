<template>
  <div class="btn-theme" :title="theme ? $t('disableLightTheme') : $t('enableLightTheme')" @click="toggleTheme">
    <SvgIcon v-if="theme" class="moon" name="moon" size="1.5" />
    <SvgIcon v-else class="moon" name="moon-solid" size="1.5" />
  </div>
</template>

<script>
export default {
  name: 'ToggleTheme',
  data() {
    return {
      theme: '',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = localStorage.getItem('theme') == 'lightTheme' ? '' : 'lightTheme';

      localStorage.setItem('theme', this.theme);
      document.documentElement.setAttribute('data-theme', this.theme);
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn-theme {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--theme-button-background-color);
      color: var(--theme-button-icon-color);
      width: 40px;
      height: 40px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
</style>
