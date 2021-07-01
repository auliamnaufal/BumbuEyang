import 'regenerator-runtime';

import '../styles/main.scss';

import './components/footer';
import './components/paymentPopup';
import './components/drawer';
import './components/headerToggle';

import App from './views/app';

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
});
