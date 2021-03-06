import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

//import App from './App.vue';
import Main from './Main.vue';

Vue.use(VueOnsen);
var ons =require('onsenui/js/onsenui');
ons.platform.select('ios');
//ons.forcePlatformStyling("ios");
new Vue({
  el: '#app',
  template: '<Main></Main>',
  components: { Main }
});
