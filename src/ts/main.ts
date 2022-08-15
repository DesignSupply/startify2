'use strict';

// stylesheet import
import '../sass/main.sass';
// import '../scss/main.scss';

import $ from 'jquery';
import { createApp } from 'vue';
import { store, key } from './store';
import { IntersectionObserverToggleClass } from './modules/class-intersection-observer-toggleclass';
import { IsLegacyIE } from './modules/checking-legacy-ie';
import { FindOS } from './modules/checking-os';
import { FindBrowser } from './modules/checking-browser';
import App from './vue/app.vue';

// Vue.js
const app = createApp({});
app.component('app', App)
  .use(store, key)
  .mount('#app');

// jQuery
$(function() {
  console.log('jQuery is ready. use TypeScript');
});

// Intersection Observer
new IntersectionObserverToggleClass({
  selector: '.observe_target', 
  className: 'observed', 
  toggle: true
});

// checking legacy IE
IsLegacyIE();

// checking OS
FindOS();

// checking browser
FindBrowser();