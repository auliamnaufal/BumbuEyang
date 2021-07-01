/* eslint-disable no-tabs */
class SliderSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
		`;
  }
}

customElements.define('slider-section', SliderSection);
