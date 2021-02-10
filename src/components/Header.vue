<template>
  <header>
    <div class="header">
      <div class="flag">
        <LanguageFlag />
      </div>
      <div class="info">
        <ToggleTheme />
      </div>
    </div>
  </header>
</template>

<script>
import LanguageFlag from '@/components/LanguageFlag';
import ToggleTheme from '@/components/ToggleTheme';

export default {
  name: 'Header',
  components: { LanguageFlag, ToggleTheme },
};
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--header-separator-color);
  padding: 0 1rem;

  .flag {
    display: flex;
    align-items: center;
  }

  .info {
    display: flex;
    align-items: center;
  }
}
</style>
