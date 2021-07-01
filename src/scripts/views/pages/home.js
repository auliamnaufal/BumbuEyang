import PaymentPopupInitiator from '../../utils/paymentPopupInitiator';

/* eslint-disable no-tabs */
const Home = {
  async render() {
    return `
		<hero-section></hero-section>

		<product-section></product-section>

		<slider-section></slider-section>

		<recipe-section></recipe-section>

		<buying-section></buying-section>

    <payment-popup></payment-popup>
		`;
  },

  async afterRender() {
    PaymentPopupInitiator.init({
      buyButton: document.querySelectorAll('.btn-card'),
      popup: document.querySelector('#popup'),
      exitBtn: document.querySelector('#exitBtn'),
      buyMethod: document.querySelectorAll('.popup-logo'),
    });

    this.slider();
  },

  slider() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = () => {
      slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" aria-label="slide button" data-slide="${i}"></button>`,
        );
      });
    };

    const activateDot = (slide) => {
      document
        .querySelectorAll('.dots__dot')
        .forEach((dot) => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

    const goToSlide = (slide) => {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
      );
    };

    // Next slide
    const nextSlide = () => {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = () => {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = () => {
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
  },
};

export default Home;
