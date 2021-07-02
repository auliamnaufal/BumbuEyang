import 'regenerator-runtime';

import '../styles/main.scss';

import './components/footer';
import './components/paymentPopup';
import './components/drawer';
import './components/headerToggle';
import './components/sliderSection';
import './components/productSection';
import './components/buyingSection';
import './components/recipeSection';
import './components/heroSection';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('main'),
  links: document.querySelectorAll('.primary-nav li'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
