import 'regenerator-runtime';

import '../styles/main.scss';

console.log('Hello Coders!');

document.querySelector('#menu').addEventListener('click', (e) => {
  document.querySelector('.navbar').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('active');
  e.stopPropagation();
});

document.querySelector('main').addEventListener('click', (e) => {
  document.querySelector('.navbar').classList.remove('open');
  document.querySelector('.menu').classList.remove('active');
  e.stopPropagation();
});
