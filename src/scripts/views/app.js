const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

const bumbuBiang = document.getElementById('biang');
const bumbuGulai = document.getElementById('gulai');
const bumbuRendang = document.getElementById('rendang');
const pelajariBtn = document.getElementById('pelajari');
const popup = document.getElementById('popup');
const exitButton = document.getElementById('exitBtn');
const mainElement = document.querySelector('main');

bumbuBiang.addEventListener('click', (e) => {
  popup.classList.remove('popup');
  e.stopPropagation();
});

bumbuGulai.addEventListener('click', (e) => {
  popup.classList.remove('popup');
  e.stopPropagation();
});

bumbuRendang.addEventListener('click', (e) => {
  popup.classList.remove('popup');
  e.stopPropagation();
});

exitButton.addEventListener('click', (e) => {
  popup.classList.add('popup');
  e.stopPropagation();
});

pelajariBtn.addEventListener('click', (e) => {
  popup.classList.add('popup');
  e.stopPropagation();
});

mainElement.addEventListener('click', (e) => {
  popup.classList.add('popup');
  e.stopPropagation();
});