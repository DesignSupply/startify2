'use strict';

// stylesheet import
import '../sass/main.sass';
// import '../scss/main.scss';

import { createApp } from 'vue';
import { store } from './store.js';
import App from './vue/app.vue';
import { IntersectionObserverToggleClass } from './modules/class-intersection-observer-toggleclass.js';
import { IsLegacyIE } from './modules/checking-legacy-ie.js';
import { FindOS } from './modules/checking-os.js';
import { FindBrowser } from './modules/checking-browser.js';
const $ = require('jQuery');

// Vue.js
const app = createApp({});
app.component('app', App)
  .use(store)
  .mount('#app');
  
// jQuery
$(function() {
  console.log('jQuery is ready.');
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