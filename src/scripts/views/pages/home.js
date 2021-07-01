import PaymentPopupInitiator from '../../utils/paymentPopupInitiator';

/* eslint-disable no-tabs */
const Home = {
  async render() {
    return `
			<section class="hero" id="home">
			<div class="cta">
				<h1 class="heading">Bumbu yang sehat dan kaya akan rempah</h1>
				<button class="btn default">
					<a href="#product"> LIHAT PRODUK</a>
				</button>
			</div>
			<a href="#product">
				<img
					class="scroll-icon"
					src="./public/logo/scroll-down.svg"
					alt="scroll down"
				/>
			</a>
		</section>

		<section class="product" id="product">
			<div class="container">
				<div class="intro">
					<h2>Produk Kami</h2>
					<p>
						Kami menjual tiga macam bumbu yang dibuat tanpa MSG dan
						menggunakan rempah berkualitas.
					</p>
				</div>
				<div class="gallery">
					<div class="product-card">
						<div class="card _1">
							<img
								src="./public/images/bumbu_gulai-img.jpeg"
								alt="foto bumbu gulai"
							/>
							<h4>Bumbu Gulai</h4>
							<button class="btn-card" aria-label="gulai">Beli</button>
						</div>
						<div class="card _2">
							<img
								src="./public/images/bumbu_gulai-img.jpeg"
								alt="foto bumbu rendang"
							/>
							<h4>Bumbu Rendang</h4>
							<button class="btn-card" aria-label="rendang">Beli</button>
						</div>
						<div class="card _3">
							<img
								src="./public/images/bumbu_biang-img.jpeg"
								alt="foto bumbu gulai"
							/>
							<h4>Bumbu biang</h4>
							<button class="btn-card" aria-label="biang">Beli</button>
						</div>
					</div>
				</div>
				<div class="strip"></div>
			</div>
		</section>

		<section class="section _3" id="section--3">
			<div class="section__title section__title--testimonials">
				<h3 class="section__header">Apa Kata Mereka?</h3>
			</div>

			<div class="slider">
				<div class="slide">
					<div class="testimonial">
						<blockquote class="testimonial__text">
							“Yang ajaibnya adalah.. si adek yang seumur-umur gak doyan
							rendang sekarang bisa makan sampai dua piring! Alhamdulillah
							banget kan.. secara si adek abis sakit jadi makannya lagi agak
							susah.”
						</blockquote>
					</div>
				</div>

				<div class="slide">
					<div class="testimonial">
						<blockquote class="testimonial__text">
							“Yang ajaibnya adalah.. si adek yang seumur-umur gak doyan
							rendang sekarang bisa makan sampai dua piring! Alhamdulillah
							banget kan.. secara si adek abis sakit jadi makannya lagi agak
							susah.”
						</blockquote>
					</div>
				</div>

				<div class="slide">
					<div class="testimonial">
						<blockquote class="testimonial__text">
							“Yang ajaibnya adalah.. si adek yang seumur-umur gak doyan
							rendang sekarang bisa makan sampai dua piring! Alhamdulillah
							banget kan.. secara si adek abis sakit jadi makannya lagi agak
							susah.”
						</blockquote>
					</div>
				</div>

				<button class="slider__btn slider__btn--left">
					<img src="./public/logo/left-arrow.svg" alt="slider left button" />
				</button>
				<button class="slider__btn slider__btn--right">
					<img src="./public/logo/right-arrow.svg" alt="slider right button" />
				</button>
				<div class="dots"></div>
			</div>
		</section>

		<section class="resep" id="recipe">
			<div class="container">
				<h1 class="header">Galeri Resep Ala Bumbu Eyang</h1>
				<p class="text">
					Temui berbagai resep masakan yang menggunakan produk bumbu dari
					Bumbu Eyang
				</p>
				<button class="btn-resep">PELAJARI LEBIH LANJUT</button>
			</div>
		</section>

		<section class="pembelian" id="pembelian">
			<div class="container">
				<h2 class="header">Cara Pembelian</h2>
				<p class="text">
					Pembelian produk Bumbu Eyang dapat dilakukan melalui Whatsapp,
					Tokopedia, Shopee, atau beli langsung.
				</p>
				<div class="logos">
					<img
						src="./public/logo/whatsapp.svg"
						alt="whatsapp logo"
						class="logo"
					/>
					<img
						src="./public/logo/tokopedia.svg"
						alt="tokopedia logo"
						class="logo"
					/>
					<img
						src="./public/logo/shopee.svg"
						alt="shopee logo"
						class="logo"
					/>
					<img src="./public/logo/house.svg" alt="house logo" class="logo" />
				</div>
				<button class="btn-pembelian">
					<a href="#">PELAJARI LEBIH LANJUT</a>
				</button>
			</div>
		</section>

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
          `<button class="dots__dot" data-slide="${i}"></button>`,
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
