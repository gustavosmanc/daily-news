<template>
  <div
    v-html="require(`!html-loader!@/assets/icons/icon-${name}.svg`)"
    class="icon"
    :class="{ 'icon-spin': spin }"
    :style="`width: ${size}rem;`"
  ></div>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: null,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '1',
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.icon-fill {
  svg {
    fill: currentColor !important;
  }
}
.icon-spin {
  animation: icon-spin 2s infinite linear;
}
@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
