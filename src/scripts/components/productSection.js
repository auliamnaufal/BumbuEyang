/* eslint-disable no-tabs */
class ProductSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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

		`;
  }
}

customElements.define('product-section', ProductSection);
