<template>
  <div @click="goBackToTop" v-if="scrollPx >= 400" class="btn-back-to-top">
    <SvgIcon class="icon" :title="$t('backToTop')" name="chevron-up" size="3" />
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      scrollPx: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPx = window.scrollY;
    },
    goBackToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-back-to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: var(--primary-text-color);
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  .icon {
    color: var(--primary-background-color);
  }
}
</style>
