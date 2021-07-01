/* eslint-disable no-tabs */
class RecipeSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
		`;
  }
}

customElements.define('recipe-section', RecipeSection);
