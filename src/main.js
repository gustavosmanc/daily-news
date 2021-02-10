import { createApp } from 'vue';
import mitt from 'mitt';

import App from '@/App.vue';
import SvgIcon from '@/components/helpers/SvgIcon';
import i18n from '@/plugins/i18n.js';

const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app
  .use(i18n)
  .component('SvgIcon', SvgIcon)
  .mount('#app');
