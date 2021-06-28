import 'regenerator-runtime';

import '../styles/main.scss';

import App from './views/app';

console.log('Hello Coders!');

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('main'),
  buyButton: document.querySelectorAll('.btn-card'),
  buyPopup: document.querySelector('#popup'),
});
