'use strict';

// stylesheet import
import '../sass/main.sass';
// import '../scss/main.scss';

import App from './vue/app.vue';
import { IntersectionObserverToggleClass } from './modules/class-intersection-observer-toggleclass.js';
const $ = require('jQuery');
const Vue = require('vue');

// Vue.js
new Vue(App).$mount('#app');

// jQuery
$(function() {
  console.log('jQuery is ready.');
});

// Intersection Observer
new IntersectionObserverToggleClass('.observe_target', 'observed', true);

// checking legacy IE
const isLegacyIE = () => {
  const currentUserAgent = window.navigator.userAgent.toLowerCase(),
    notice = 'ご利用のウェブブラウザでは当サイトを正常に閲覧できません。ブラウザのバージョンを最新にして再度アクセスしてください。',
    targets = [ 
      'msie 6.0', // Internet Explorer 6
      'msie 7.0', // Internet Explorer 7
      'msie 8.0', // Internet Explorer 8
      'msie 9.0', // Internet Explorer 9
      'msie 10.0', // Internet Explorer 10
      'trident/7.0' // Internet Explorer 11
    ];
    Array.prototype.slice.call(targets).forEach((target) => {
    if(currentUserAgent.indexOf(target) !== -1) {
      alert(notice);
    } else {
      return false;
    }
  });
};
isLegacyIE();

// checking OS
const findOS = () => {
  const currentUserAgent = window.navigator.userAgent.toLowerCase();
  if(currentUserAgent.indexOf('windows nt') !== -1) {
    return 'Windows';
  } else if((currentUserAgent.indexOf('android') !== -1) && (currentUserAgent.indexOf('mobile') !== -1)) {
    return 'Android Mobile';
  } else if((currentUserAgent.indexOf('android') !== -1) && (currentUserAgent.indexOf('mobile') === -1)) {
    return 'Android Tablet';
  } else if(currentUserAgent.indexOf('iphone') !== -1) {
    return 'iOS iPhone';
  } else if(currentUserAgent.indexOf('ipad') !== -1) {
    return 'iOS iPad';
  } else if(currentUserAgent.indexOf('mac os') !== -1) {
    return 'Mac OS';
  } else {
    return 'other OS';
  }
};
findOS();

// checking browser
const findBrowser = () => {
  const currentUserAgent = window.navigator.userAgent.toLowerCase();
  if(currentUserAgent.indexOf('msie') !== -1 || currentUserAgent.indexOf('trident') !== -1) {
    return 'Internet Explorer';
  } else if(currentUserAgent.indexOf('edge') !== -1) {
    return 'Microsoft Edge';
  } else if(currentUserAgent.indexOf('edg') !== -1) {
    return 'Chromium Edge';
  } else if(currentUserAgent.indexOf('opr') !== -1) {
    return 'Opera';
  } else if(currentUserAgent.indexOf('chrome') !== -1) {
    return 'Google Chrome';
  } else if(currentUserAgent.indexOf('safari') !== -1) {
    return 'Safari';
  } else if(currentUserAgent.indexOf('firefox') !== -1) {
    return 'FireFox';
  } else {
    return 'other Browser';
  }
};
findBrowser();