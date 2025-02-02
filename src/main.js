import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Field } from 'vee-validate';
import { Form } from 'vee-validate';
import { ErrorMessage } from 'vee-validate';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);

app.use(pinia);

app.use(router).mount('#app');


