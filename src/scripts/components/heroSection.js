/* eslint-disable no-tabs */
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<section class="hero" id="home">
				<div class="cta">
					<h1 class="heading">Bumbu yang sehat dan kaya akan rempah</h1>
					<button class="btn default">
						<a href="#product"> LIHAT PRODUK</a>
					</button>
				</div>
				<a href="#product" aria-label="scroll to content>
					<img
						class="scroll-icon"
						src="./public/logo/scroll-down.svg"
						alt="scroll down"
					/>
				</a>
			</section>
		`;
  }
}

customElements.define('hero-section', HeroSection);
