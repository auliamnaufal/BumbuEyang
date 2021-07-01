import 'regenerator-runtime';

import '../styles/main.scss';

import './components/footer';
import './components/paymentPopup';

import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('main'),
  buyButton: document.querySelectorAll('.btn-card'),
  buyPopup: document.querySelector('#popup'),
  exitBtn: document.querySelector('#exitBtn'),
  links: document.querySelectorAll('.primary-nav li'),
  buyMethod: document.querySelectorAll('.popup-logo'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
